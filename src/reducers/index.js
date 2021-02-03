import { combineReducers } from 'redux';
import user from './user';
// import video from './video';
import play from './play';

const rootReducer = combineReducers({
  user,
  //   video,
  play,
});

export default rootReducer;
