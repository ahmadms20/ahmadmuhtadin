var http = require('http');
var ab = require('./teks');
var dt = require('./teks2');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>"+ ab.teks +"</h1>");
  res.write('<h1> 4 x 5 = ' + dt.kali(4, 5) +"</h1>");
  res.end();
}).listen(8080);