
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res){

   let q = url.parse(req.url, true);
   let filename = `.${q.pathname}`;
   let ext = path.extname(filename);
console.log('filename: '+filename);
console.log('ext: '+ext);
//	res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();

}).listen(8181);
