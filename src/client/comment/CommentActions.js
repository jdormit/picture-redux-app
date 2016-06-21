export const getComments(picture_id) {
  return function(dispatch) {
    dispatch(requestComments());
    return fetch(`/api/comment/${picture_id}`)
    .then(response => response.json().then(comments => {
      dispatch(receiveComments(comments));
    }));
  }
}

export const addComment(comment) {
  type: 'ADD_COMMENT',
  comment
}

export const requestComments() {
  return {
    type: 'REQUEST_COMMENTS'
  };
}

export const receiveComments(comments) {
  return {
    type: 'RECEIVE_COMMENTS',
    comments
  };
}

export const postComment(comment) {
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

export const postingComment() {
  return {
    type: 'POSTING_COMMENT'
  };
}
