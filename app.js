/**
 * Created by ibm on 2017/9/27.
 */
var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var logger = require('morgan');
var routes = require('./routes');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(app.get('port'), function () {
    console.log('server is running at http://127.0.0.1:3000');
});