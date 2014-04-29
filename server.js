/**
 * Created by mordrax on 29/04/14.
 */
var sys = require("sys"),
    url = require('url'),
    fs = require('fs'),
    my_http = require("http");

my_http.createServer(function(request,response){
    sys.puts("I got kicked");

    var world = JSON.parse(fs.readFileSync('world'));

    // routing
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    switch (url_parts.pathname) {
        case '/':
            response.end(fs.readFileSync('index.html'));
            break;
        case '/updatetime':
            response.end(world.time);
            break;
        case '/favicon.ico':
            response.end();
            break;
        default:
            response.writeHead(200, {"Content-Type": "application/javascript"});
            response.end(fs.readFileSync(url_parts.pathname.slice(1)));
            break;
    }
}).listen(8080);
sys.puts("Server Running on 8080");
