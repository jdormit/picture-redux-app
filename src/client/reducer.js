import {combineReducers} from 'redux';
import pictureReducer from './picture/PictureReducer';
import commentReducer from './comment/CommentReducer';

export default combineReducers({
  pictureState: pictureReducer,
  commentState: commentReducer
});
