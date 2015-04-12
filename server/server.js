var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.polls = [];

app.use(express.static('../app/'));
app.use(bodyParser());

app.post('/message', function(req, res) {
    var polls = app.polls;
    app.polls = [];
    
    polls.map(function(pollingRes) {
        pollingRes.json({
            message: req.body.message,
            user: req.body.user
        });
    });
 
    res.json({});
});

app.get('/poll', function(req, res) {
    app.polls.push(res);
});

app.listen(8000)
