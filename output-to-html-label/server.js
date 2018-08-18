var fs = require('fs');
var http = require('http');
var import_module = require('./export');

var server = http.createServer(function(req, res) {
  console.log("URL страницы: " + req.url);
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8', {name:name});
  myReadShort.pipe(res);
} );
server.listen(3000, '127.0.0.1');
console.log("we are listening port 3000");
