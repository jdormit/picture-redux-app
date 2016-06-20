'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picture = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picture = exports.Picture = _react2.default.createClass({
  displayName: 'Picture',

  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        this.props.title
      ),
      _react2.default.createElement('img', { src: this.props.url, alt: this.props.title, height: this.props.height, width: this.props.width }),
      _react2.default.createElement(
        'p',
        null,
        this.props.caption
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Comments'
      ),
      this.props.comments.map(function (comment) {
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            comment.datePosted,
            ' ',
            comment.postedBy,
            ' said:'
          ),
          _react2.default.createElement(
            'p',
            null,
            comment.text
          )
        );
      }),
      ';'
    );
  }
});

function mapStateToProps(state) {
  return {};
}