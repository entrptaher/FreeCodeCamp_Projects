var express = require('express')
var app = express()
app.set('view engine', 'pug')

var port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.render('index', { title: 'Timestamp API', baseurl: req.protocol + '://' + req.get('host') })
})

app.get('/:time', function (req, res) {
    // empty array
    var data={'unix':'', 'natural':""};
    var inputtime = req.params.time;
    
    //check if this is a UTC time
    if(!isNaN(Date.parse(inputtime))){
            data.unix = Date.parse(inputtime)/1000
            data.natural = new Date(inputtime).toUTCString();
    }
    // Check if this is a unix timestamp
    else if(!isNaN(new Date(inputtime*1000))){
        data.unix = inputtime
        data.natural = new Date(inputtime*1000).toUTCString();
    }
    else{
        data.unix = 'null'
        data.natural = 'null'
    }
    res.send(data)
})

app.listen(port, function () {
  console.log('Example app listening on port: '+port)
})