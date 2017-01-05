var express = require('express');
var app = new express();
var port = process.env.PORT || 3000;

var dburl = "mongodb://test:test@ds155418.mlab.com:55418/freecodecamp"
var mongoose = require('mongoose');
mongoose.connect(dburl);
var url = mongoose.model('urls', {
    url: String,
    id: String
});

app.get('/', function(req, res) {
    res.send('<h1>URL Shortener</h1><br>Going thru <b>' + req.protocol + '://' + req.get('host') + "/new/http://www.example.com</b> will result in something like <b>" + req.protocol + '://' + req.get('host') + "/xyza</b>");
});

app.get('/new/*', function(req, res) {
    if (/http(s|):\/\/www\.[a-zA-Z0-9]{2,256}\.[a-zA-Z0-9]{2,6}/.test(req.params[0])) {
        random = Math.random().toString(36).substr(2, 5);
        var kitty = new url({
            'url': req.params[0],
            'id': random
        });
        kitty.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    'original_url': req.params[0],
                    'short_url': req.protocol + '://' + req.get('host') + "/" + kitty.id
                });
            }
        });
    } else {
        res.send("Invalid URL, proper url have this format, `http://www.example.com`")
    }
});

app.get('/:id', function(req, res) {

    url.findOne({
        "id": req.params.id
    }, function(err, results) {
        if (err) {
            res.send(err);
        } else if (results) {
            res.redirect(results.url);
        } else {
            res.send("ID Not Found");
        }
    });

});


app.listen(port, function() {
    console.log('listening on port ' + port);
});
