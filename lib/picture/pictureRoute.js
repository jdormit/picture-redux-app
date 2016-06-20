'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _PictureModel = require('./PictureModel');

var _PictureModel2 = _interopRequireDefault(_PictureModel);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)();
var router = _express2.default.Router();

router.get('/', function (req, res, next) {
  _PictureModel2.default.find(function (err, pictures) {
    if (err) return res.setStatus(500).send(err);
    res.send(pictures);
  });
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  _PictureModel2.default.find({ _id: id.toObjectId() }, function (err, picture) {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.post('/', upload.array(), function (req, res, next) {
  var picture = new _PictureModel2.default(req.body);
  picture.save(function (err, picture) {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.put('/:id', function (req, res, next) {
  var id = req.params.id;
  _PictureModel2.default.update({ _id: id.toObjectId() }, req.body.update, function (err, picture) {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  _PictureModel2.default.remove(function (err, result) {
    if (err) return res.setStatus(500).send(err);
    res.send(result);
  });
});

exports.default = router;