import {Map} from 'immutable';

const initialState = Map({
  comments: {},
  isFetching: false
});

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return state.update('comments', comment => {
        let newComment = {};
        newComment[action.comment._id] = action.comment;
        Object.assign(comment, newComment);
      })
      .set('isFetching', false);
    case 'REQUEST_COMMENTS':
      return state.set('isFetching', true);
    case 'RECEIVE_COMMENTS':
      const commentsObject = {};
      action.comments.map(comment => {
        commentsObject[comment._id] = comment;
      });
      return state.mergeIn(['comments'], commentsObject).set('isFetching', false);
    case 'POSTING_COMMENT':
      return state.set('isFetching', true);
  }
  return state;
}
