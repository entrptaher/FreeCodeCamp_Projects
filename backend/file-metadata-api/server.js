// index.js start of file
var express = require('express');
var multer = require('multer'), bodyParser = require('body-parser'), path = require('path');

var app = new express();
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// index.js continued
app.get('/', function(req, res){
  res.render('index');
});

app.post('/', multer({dest:'./uploads/'}).single('upload'),function(req,res){
  res.send({size:req.file.size})
})
// index.js end of file
app.listen( process.env.PORT, function(){ console.log('listening on port '+process.env.PORT); } );
