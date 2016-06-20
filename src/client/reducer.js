import {combineReducers} from 'redux';
import pictureReducer from './picture/PictureReducer';

export default combineReducers({
  pictureState: pictureReducer
});
