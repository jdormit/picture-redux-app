'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PictureContainer = exports.Picture = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picture = exports.Picture = _react2.default.createClass({
  displayName: 'Picture',

  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        this.props.picture.title
      ),
      _react2.default.createElement('img', { src: this.props.picture.url, alt: this.props.picture.title, height: this.props.picture.height, width: this.props.picture.width }),
      _react2.default.createElement(
        'p',
        null,
        this.props.picture.caption
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Comments'
      ),
      Object.keys(this.props.comments).map(function (comment_id) {
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            _this.props.comments[comment_id].datePosted,
            ' ',
            _this.props.comments[comment_id].postedBy,
            ' said:'
          ),
          _react2.default.createElement(
            'p',
            null,
            _this.props.comments[comment_id].text
          )
        );
      })
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {
    comments: state.commentState.get('comments'),
    picture: state.pictureState.get('pictures')[ownProps.params.id]
  };
}

var PictureContainer = exports.PictureContainer = (0, _reactRedux.connect)(mapStateToProps)(Picture);