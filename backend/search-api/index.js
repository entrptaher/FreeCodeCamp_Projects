var data = {
    "key": "AIzaSyAuwTC-uX-Xueqy-e4l-U2QrgdDx6crc7k",
    "cx": "013549275507300316553:tnrfqhtfboe",
}

var request = require('request');
var queries = [],
    results = {};
var port = process.env.PORT || 3000;
var express = require('express')
var app = express()
    // Config body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/imagesearch/:query', function(req, res) {
    queries.push({
        "term": req.params.query,
        "when": new Date().toISOString()
    });
    if (req.query.offset) {
        start = req.query.offset;
    } else {
        start = 1;
    }
    request('https://www.googleapis.com/customsearch/v1?key=' + data.key + '&cx=' + data.cx + '&searchType=image&q=' + req.params.query + '&start=' + start, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body).items;
            var returnarray = [];
            for (var i = 0; i < data.length; i++) {
                returnarray[i] = {
                    "url": data[i].link,
                    "snippet": data[i].snippet,
                    "thumbnail": data[i].image.thumbnailLink,
                    "context": data[i].image.contextLink
                };
            }
            res.send(returnarray);
        }
    })

})

app.get('/api/latest/imagesearch/', function(req, res) {
    res.send(queries);
})

app.listen(port, function() {
    console.log('Example app listening on port '+port)
})
