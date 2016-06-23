import {Map, List} from 'immutable';

const initialState = Map({
  pictures: {},
  isFetching: false
});

export default function pictureReducer(state = initialState, action) {
  switch(action.type) {
    case 'POSTING_PICTURE':
      return state.set('isFetching', true);
    case 'ADD_PICTURE':
      return state.update('pictures', (pictures) => {
        let newPicture = {};
        newPicture[action.picture._id] = action.picture;
        return Object.assign({}, pictures, newPicture);
      })
      .set('isFetching', false);
    case 'REQUEST_PICTURES':
      return state.set('isFetching', true);
    case 'RECEIVE_PICTURES':
      const pictureObject = {};
      action.pictures.map(pic => {
        pictureObject[pic._id] = pic;
      });
      return state.mergeIn(['pictures'], pictureObject).set('isFetching', false);
  }
  return state;
}
