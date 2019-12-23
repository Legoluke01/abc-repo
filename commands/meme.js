const Discord = require("discord.js");
const request = require("request")

const MAX_AGE = 1000 * 60 * 15;
const subreddits = [ 'hmmm', 'dankmemes', 'memes', 'funny', 'deepfriedmemes', 'dadjokes', 'wholesomememes', 'meirl', 'me_irl', '2meirl4meirl' ];

let subredditCache = {};
exports.cache = subredditCache;

function updateSubreddit(subreddit) {
	return new Promise((resolve, reject) => {
		if (subredditCache[subreddit] && Date.now() - subredditCache[subreddit].lastUpdate < MAX_AGE) return resolve();

		request(`https://imgur.com/r/${subreddit}/hot.json`, (err, response, body) => {
			if (err) return reject();
			let json;

			try {
				json = JSON.parse(body);
			} catch (e) {
				return reject();
			}

			if (!json || !json.data || !json.data[0]) return reject();

			json.data = json.data.filter(data => {
				return !data.nsfw && data.num_images >= 1 && data.mimetype && data.mimetype.startsWith('image');
			});

			if (json.data.length < 1) return reject();

			subredditCache[subreddit] = {
				data: json.data,
				lastUpdate: Date.now()
			};

			resolve();
		});
	});
}

function getSubredditMeme(subreddit) {
	return new Promise((resolve, reject) => {
		updateSubreddit(subreddit).then(() => {
			let { data } = subredditCache[subreddit];
			
			resolve(data[Math.floor(Math.random() * data.length)]);
		}).catch(reject);
	});
}




exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)

    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
	
	getSubredditMeme(randomSubreddit).then(meme => {

        const memeEmbed = new Discord.RichEmbed()
        .setTitle(meme.title)
        .setURL(`https://reddit.com` + meme.reddit)
        .setImage(`https://i.imgur.com/${meme.hash}${meme.ext}`)
        .setColor(settings.embedColor)
        .setFooter(`Posted by u/${meme.author} on r/${randomSubreddit}`);



		message.channel.send(memeEmbed)
	})


}

exports.help = {
    name: "meme",
    description: "Get a random meme from over 5 different subbreddits. So you will almost never have the same meme.",
    category: "Entertainment",
    usage: "meme"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["randommeme", "maymay"],
    permLevel: "User"
}