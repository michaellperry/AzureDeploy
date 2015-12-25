var http = require('http');
var server = http.createServer(function (req, rsp) {
  rsp.write("<html><body>Hi!</body></html>");
  rsp.end();
});

server.listen(80);
