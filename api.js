const http = require("http");

var server = http.createServer(processor);

server.listen(80);

function processor(request, response) {
    var url = request.url.slice(1).split("/");
    
    if (url[0] == "stats") {
        
    }
    
}