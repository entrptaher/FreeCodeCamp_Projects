var express = require('express');
var app = new express();
var parser = require('ua-parser-js');

app.get('/', function(req, res){
  var machine = parser(req.headers['user-agent']);
  res.send({
    "ip": req.headers['x-forwarded-for'].split(',')[0],
    'language': req.headers['accept-language'].split(',')[0],
    "machine": machine.os.name + " " + machine.os.version + " " + machine.cpu.architecture 
  });
});

app.listen( process.env.PORT, function(){ console.log('listening on port '+process.env.PORT); } );
