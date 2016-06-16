'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var pictureSchema = Schema({
  url: String,
  title: String,
  caption: String,
  postedBy: String,
  datePosted: Date,
  height: Number,
  width: Number
});

exports.default = _mongoose2.default.model('Picture', pictureSchema);