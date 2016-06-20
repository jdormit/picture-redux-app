'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postingPicture = postingPicture;
exports.addPicture = addPicture;
exports.postPicture = postPicture;
exports.requestPictures = requestPictures;
exports.receivePictures = receivePictures;
exports.getPictures = getPictures;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postingPicture() {
  return {
    type: 'POSTING_PICTURE'
  };
}

function addPicture(picture) {
  return {
    type: 'ADD_PICTURE',
    picture: picture
  };
}

function postPicture(picture) {
  console.log('posting a new picture');
  return function (dispatch) {
    dispatch(postingPicture());
    return (0, _isomorphicFetch2.default)('/api/picture', {
      method: 'POST',
      body: picture
    }).then(function (response) {
      dispatch(addPicture(response));
      window.location = '/';
    });
  };
}

function requestPictures() {
  return {
    type: 'REQUEST_PICTURES'
  };
}

function receivePictures(pictures) {
  return {
    type: 'RECEIVE_PICTURES',
    pictures: pictures
  };
}

function getPictures() {
  return function (dispatch) {
    console.log("getting pictures");
    // dispatch a request action to set the isFetching flag
    dispatch(requestPictures());

    return (0, _isomorphicFetch2.default)('/api/picture').then(function (response) {
      return response.json().then(function (pictures) {
        return dispatch(receivePictures(pictures));
      });
    });
  };
}