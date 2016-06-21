'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

require('babel-polyfill');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _PictureFeed = require('./picture/PictureFeed');

var _Picture = require('./picture/Picture');

var _NewPictureForm = require('./picture/NewPictureForm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react / redux entry point


var store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _PictureFeed.PictureFeedContainer }),
  _react2.default.createElement(_reactRouter.Route, { path: '/addPicture', component: _NewPictureForm.NewPictureFormContainer }),
  _react2.default.createElement(_reactRouter.Route, { path: '/pictures/:id', component: _Picture.PictureContainer })
);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    routes
  )
), document.getElementById('app'));