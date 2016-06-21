export function getComments(picture_id) {
  return function(dispatch) {
    dispatch(requestComments());
    return fetch(`/api/comment/${picture_id}`)
    .then(response => response.json().then(comments => {
      dispatch(receiveComments(comments));
    }));
  }
}

export function addComment(comment) {
  type: 'ADD_COMMENT',
  comment
}

export function requestComments() {
  return {
    type: 'REQUEST_COMMENTS'
  };
}

export function receiveComments(comments) {
  return {
    type: 'RECEIVE_COMMENTS',
    comments
  };
}

export function postComment(comment) {
  return function(dispatch) {
    dispatch(postingComment());
    return fetch('/api/comment', {
      method: 'POST',
      body: comment
    })
    .then(response => {
      dispatch(addComment(response));
    });
  }
}

export function postingComment() {
  return {
    type: 'POSTING_COMMENT'
  };
}
