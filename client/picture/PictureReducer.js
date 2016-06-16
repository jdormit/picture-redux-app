import {Map, List} from 'immutable';

const initialState = Map({
  pictures: List(),
  isFetching: false
});

export default function pictureReducer(state = initialState, action) {
  switch(action.type) {
    case 'POSTING_PICTURE':
      return state.set('isFetching', true);
    case 'ADD_PICTURE':
      return state.update('pictures', (pictures) => {return pictures.push(action.picture)})
      .set('isFetching', true);
    case 'REQUEST_PICTURES':
      return state.set('isFetching', true);
    case 'RECEIVE_PICTURES':
      return state.update('pictures', (pictures) => {
        return pictures.push(action.pictures)
      }).set('isFetching', false);
  }
  return state;
}
