//GLOBAL DECLARATIONS

global.rootRequire = function(name){//global require function for relative paths
    return require(__dirname + '/' + name);
};

var express = require('express');
var path = require('path');
var routes = require('./routes/index');


//servers setup
var http = require('http');

var compression = require('compression');//gzip compression to serve optimized data
var app = module.exports = express();

app.set('port', 8000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//initiate messaging system
//require('./models/messaging.js');
app.use(compression());//enable gzip compression

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

http.createServer(app).listen(app.get('port'),function(){ console.log('Server started listening at port: '+app.get('port'))});