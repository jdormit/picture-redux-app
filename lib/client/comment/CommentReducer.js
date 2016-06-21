'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = commentReducer;

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  comments: {},
  isFetching: false
});

function commentReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  var _ret = function () {
    switch (action.type) {
      case 'ADD_COMMENT':
        return {
          v: state.update('comments', function (comment) {
            var newComment = {};
            newComment[action.comment._id] = action.comment;
            Object.assign(comment, newComment);
          }).set('isFetching', false)
        };
      case 'REQUEST_COMMENTS':
        return {
          v: state.set('isFetching', true)
        };
      case 'RECEIVE_COMMENTS':
        var commentsObject = {};
        action.comments.map(function (comment) {
          commentsObject[comment._id] = comment;
        });
        return {
          v: state.mergeIn(['comments'], commentsObject).set('isFetching', false)
        };
      case 'POSTING_COMMENT':
        return {
          v: state.set('isFetching', true)
        };
    }
  }();

  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  return state;
}