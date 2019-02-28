"use strict";
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
console.log("Server Started! Please visit http://127.0.0.1:" + port);
//# sourceMappingURL=main.js.map