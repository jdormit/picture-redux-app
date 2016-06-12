'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _commentModel = require('./commentModel');

var _commentModel2 = _interopRequireDefault(_commentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/:picId', function (req, res, next) {
  var picId = req.params.picId;
  _commentModel2.default.find({ _picture: picId.toObjectId() }, function (err, comments) {
    if (err) return res.setStatus(500).send(err);
    res.send(comments);
  });
});

router.post('/', function (req, res, next) {
  var comment = new _commentModel2.default(req.body.comment);
  comment.save(function (err, comment) {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

router.put('/:id', function (req, res, next) {
  var id = req.params.id;
  _commentModel2.default.update({ _id: id.toObjectId() }, req.body.update, function (err, comment) {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  _commentModel2.default.delete({ _id: id.toObjectId() }, function (err, comment) {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

exports.default = router;