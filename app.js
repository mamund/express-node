/* 2011-11-07 (mca) */

var app = require('express').createServer();

var g = {};
g.port = (process.env.C9_PORT ? process.env.C9_PORT : 80);
g.ip = '0.0.0.0'; 

app.get('/', function(req, res){
  var q = (req.query.q||'');
  res.send('hello, github world<br />'+q);
});

app.listen(g.port, g.ip);