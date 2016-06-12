'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose2.default.Schema.ObjectId; // miscellaneous configuration tasks


String.prototype.toObjectId = function () {
  return new ObjectId(this.toString());
};