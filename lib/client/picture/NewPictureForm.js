'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewPictureFormContainer = exports.NewPictureForm = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionIndex = require('../actionIndex');

var actions = _interopRequireWildcard(_actionIndex);

var _PictureActions = require('./PictureActions');

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function constructPicture() {
  var formData = new FormData(document.getElementById('new_picture_form'));
  return formData;
}

var NewPictureForm = exports.NewPictureForm = _react2.default.createClass({
  displayName: 'NewPictureForm',

  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'form',
        { id: 'new_picture_form' },
        _react2.default.createElement(
          'label',
          { 'for': 'title' },
          'Title'
        ),
        _react2.default.createElement('input', { type: 'text', name: 'title' }),
        _react2.default.createElement(
          'label',
          { 'for': 'url' },
          'Picture URL:'
        ),
        _react2.default.createElement('input', { type: 'text', name: 'url' }),
        _react2.default.createElement(
          'label',
          { 'for': 'caption' },
          'Add a Caption:'
        ),
        _react2.default.createElement('textarea', { name: 'caption' }),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              return _this.props.postPicture(constructPicture());
            } },
          'Send It'
        )
      )
    );
  }
});

var NewPictureFormContainer = exports.NewPictureFormContainer = (0, _reactRedux.connect)(null, actions.PictureActions)(NewPictureForm);