'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentActions = exports.PictureActions = undefined;

var _PictureActions = require('./picture/PictureActions');

var PictureActions = _interopRequireWildcard(_PictureActions);

var _CommentActions = require('./comment/CommentActions');

var CommentActions = _interopRequireWildcard(_CommentActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.PictureActions = PictureActions;
exports.CommentActions = CommentActions;