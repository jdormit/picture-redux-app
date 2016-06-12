'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pictureRoute = require('./picture/pictureRoute');

var _pictureRoute2 = _interopRequireDefault(_pictureRoute);

var _commentRoute = require('./comment/commentRoute');

var _commentRoute2 = _interopRequireDefault(_commentRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/picture', _pictureRoute2.default);
router.use('/comment', _commentRoute2.default);

exports.default = router;