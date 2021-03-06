var express = require('express'),
    http = require('http'),
    bookModel = require('./models/bookModel');

var app = express();

// set our port
var port = process.env.PORT || 3000;

// set the static files location
app.use(express.static('public'));

// Uncomment the following lines to use Jade as the view engine
/*
app.set('views', './public/views');
app.set('view engine', 'jade');
app.get('/', function (request, response) {
    response.render('index', {
        titleString: 'Niner Greats',
        jerseys: [16,8,42]
    });
});
*/

// Uncomment the following lines to use Jade as the view engine
/*
app.set('views', './public/views');
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
    response.render('index', {
        titleString: 'Niner Greats',
        jerseys: [16,8,42]
    });
});
*/

app.get('/getBooks', function (request, response) {
    bookModel.find(function (err, data) {
        if (err) {
            response.send(500, 'There was an error getting books - tough luck.');
        } else {
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(data);
        }
    });
});

app.get('/getBooksOnSale', function (request, response) {
    bookModel.find({discount: {$exists:true}}, function (err, data) {
        if (err) {
            response.send(500, 'There was an error getting books on sale - tough luck.');
        } else {
            response.setHeader('Content-Type', 'application/json');
            response.status(200).json(data);
        }
    });
});

// Use Angular routing
require('./routes')(app); // configure our routes

http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port + ' - visit http://localhost:3000/');
});

// expose app
exports = module.exports = app;