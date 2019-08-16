'use strict';

// import method?
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    response.write(request.url);

    if (request.url != "/favicon.ico") {
        console.log(url.parse(request.url, true).query.test);
    }

    // end response, must
    response.end("Hello First");
}).listen(8888);

console.log("Running server on localhost:8888");
// console.log(url.parse("https://www.google.com/get?test=hello"));
