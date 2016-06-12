'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Mongoose = require('Mongoose');

var _Mongoose2 = _interopRequireDefault(_Mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _Mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var commentSchema = Schema({
  text: String,
  datePosted: Date,
  postedBy: String,
  _picture: { type: ObjectId, ref: 'Picture' }
});

exports.default = _Mongoose2.default.model('Comment', commentSchema);