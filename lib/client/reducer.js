'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _PictureReducer = require('./picture/PictureReducer');

var _PictureReducer2 = _interopRequireDefault(_PictureReducer);

var _CommentReducer = require('./comment/CommentReducer');

var _CommentReducer2 = _interopRequireDefault(_CommentReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  pictureState: _PictureReducer2.default,
  commentState: _CommentReducer2.default
});