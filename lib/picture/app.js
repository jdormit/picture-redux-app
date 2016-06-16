'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('./config');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080; // Application entry point

var mongoUrl = "mongodb://localhost:27017/picture-redux-app";

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_express2.default.static(_path2.default.resolve('./public')));

app.use('/api', _routes2.default);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve('./public/index.html'));
});

_mongoose2.default.connect(mongoUrl);
var db = _mongoose2.default.connection;

db.on('error', function (error) {
  throw error;
});

db.once('open', function () {
  app.listen(port);
  console.log('Server listening on port ' + port + '.');
});