'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComments = getComments;
exports.addComment = addComment;
exports.requestComments = requestComments;
exports.receiveComments = receiveComments;
exports.postComment = postComment;
exports.postingComment = postingComment;
function getComments(picture_id) {
  return function (dispatch) {
    dispatch(requestComments());
    return fetch('/api/comment/' + picture_id).then(function (response) {
      return response.json().then(function (comments) {
        dispatch(receiveComments(comments));
      });
    });
  };
}

function addComment(comment) {
  type: 'ADD_COMMENT', comment;
}

function requestComments() {
  return {
    type: 'REQUEST_COMMENTS'
  };
}

function receiveComments(comments) {
  return {
    type: 'RECEIVE_COMMENTS',
    comments: comments
  };
}

function postComment(comment) {
  return function (dispatch) {
    dispatch(postingComment());
    return fetch('/api/comment', {
      method: 'POST',
      body: comment
    }).then(function (response) {
      dispatch(addComment(response));
    });
  };
}

function postingComment() {
  return {
    type: 'POSTING_COMMENT'
  };
}