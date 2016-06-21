'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = pictureReducer;

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  pictures: {},
  isFetching: false
});

function pictureReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  var _ret = function () {
    switch (action.type) {
      case 'POSTING_PICTURE':
        return {
          v: state.set('isFetching', true)
        };
      case 'ADD_PICTURE':
        return {
          v: state.update('pictures', function (pictures) {
            var newPicture = {};
            newPicture[action.picture._id] = action.picture;
            return Object.assign(pictures, newPicture);
          }).set('isFetching', false)
        };
      case 'REQUEST_PICTURES':
        return {
          v: state.set('isFetching', true)
        };
      case 'RECEIVE_PICTURES':
        var pictureObject = {};
        action.pictures.map(function (pic) {
          pictureObject[pic._id] = pic;
        });
        return {
          v: state.mergeIn(['pictures'], pictureObject).set('isFetching', false)
        };
    }
  }();

  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  return state;
}