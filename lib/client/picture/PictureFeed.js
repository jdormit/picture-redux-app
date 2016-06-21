'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PictureFeedContainer = exports.PictureFeed = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actionIndex = require('../actionIndex');

var actions = _interopRequireWildcard(_actionIndex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PictureFeed = exports.PictureFeed = _react2.default.createClass({
  displayName: 'PictureFeed',

  componentWillMount: function componentWillMount() {
    this.props.getPictures();
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        { href: '/#/addPicture' },
        'Add A Picture'
      ),
      Object.keys(this.props.pictures).map(function (picture_id) {
        return _react2.default.createElement(
          'div',
          { key: picture_id },
          _react2.default.createElement(
            'h3',
            null,
            _this.props.pictures[picture_id].title
          ),
          _react2.default.createElement(
            'a',
            { href: '/#/pictures/' + picture_id },
            _react2.default.createElement('img', { src: _this.props.pictures[picture_id].url, alt: _this.props.pictures[picture_id].title, width: '256', height: '192' })
          )
        );
      }),
      ';'
    );
  }
});

function mapStateToProps(state) {
  return {
    pictures: state.pictureState.get('pictures')
  };
}

var PictureFeedContainer = exports.PictureFeedContainer = (0, _reactRedux.connect)(mapStateToProps, actions.PictureActions)(PictureFeed);