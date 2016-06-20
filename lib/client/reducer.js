'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _PictureReducer = require('./picture/PictureReducer');

var _PictureReducer2 = _interopRequireDefault(_PictureReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  pictureState: _PictureReducer2.default
});