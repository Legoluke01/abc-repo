const translate = require("google-translate-api");
const Discord = require("discord.js")

exports.run = async (client, message, args, level) => {

    message.channel.send("This command is still being worked on.")

    if (args[0] === "languages") {
        message.channel.send("auto Automatic,\naf Afrikaans,\nsq Albanian,\nam Amharic,\nar Arabic,\nhy Armenian,\naz Azerbaijani,\neu Basque,\nbe Belarusian,\nbn Bengali,\nbs Bosnian,\nbg Bulgarian,\nca Catalan,\nceb Cebuano,\nny Chichewa,\nzh-cn Chinese Simplified,\nzh-tw Chinese Traditional,\nco Corsican,\nhr Croatian,\ncs Czech,\nda Danish,\nnl Dutch,\nen English,\neo Esperanto,\net Estonian,\ntl Filipino,\nfi Finnish,\nfr French,\nfy Frisian,\ngl Galician,\nka Georgian,\nde German,\nel Greek,\ngu Gujarati,\nht Haitian Creole,\nha Hausa,\nhaw Hawaiian,\niw Hebrew,\nhi Hindi,\nhmn Hmong,\nhu Hungarian,\nis Icelandic,\nig Igbo,\nid Indonesian,\nga Irish,\nit Italian,\nja Japanese,\njw Javanese,\nkn Kannada,\nkk Kazakh,\nkm Khmer,\nko Korean,\nku Kurdish (Kurmanji),\nky Kyrgyz,\nlo Lao,\nla Latin,\nlv Latvian,\nlt Lithuanian,\nlb Luxembourgish,\nmk Macedonian,\nmg Malagasy,\nms Malay,\nml Malayalam,\nmt Maltese,\nmi Maori,\nmr Marathi,\nmn Mongolian,\nmy Myanmar (Burmese),\nne Nepali,\nno Norwegian,\nps Pashto,\nfa Persian,\npl Polish,\npt Portuguese,\nma Punjabi,\nro Romanian,\nru Russian,\nsm Samoan,\ngd Scots Gaelic,\nsr Serbian,\nst Sesotho,\nsn Shona,\nsd Sindhi,\nsi Sinhala,\nsk Slovak,\nsl Slovenian,\nso Somali,\nes Spanish,\nsu Sundanese,\nsw Swahili,\nsv Swedish,\ntg Tajik,\nta Tamil,\nte Telugu,\nth Thai,\ntr Turkish,\nuk Ukrainian,\nur Urdu,\nuz Uzbek,\nvi Vietnamese,\ncy Welsh,\nxh Xhosa,\nyi Yiddish,\nyo Yoruba,\nzu Zulu", { code: "json" })
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['t'],
    permLevel: "User"
}

exports.help = {
    name: "translate",
    category: "Information",
    description: "Translate any text you want to another language. say [prefix]translate languages for a list of languages and their abreviations.",
    usage: "translate <lang abreveation1> <lang abreviation2> [text to translate] | Leave first one blank for it to be detect language."
}