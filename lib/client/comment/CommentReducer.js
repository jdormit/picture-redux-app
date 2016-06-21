'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commentReducer;

var _immutable = require('immutable');

var initialState = {
  comments: (0, _immutable.Map)(),
  isFetching: false
};

function commentReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {}
}