import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_PLAYLIST_REQUEST, ADD_PLAYLIST_SUCCESS } from '../reducers/video';

function* addPlayList(action) {
  yield delay(1000);
  yield put(
    console.log(action),
    console.log(action.data)
  )
  yield put({
    type: ADD_PLAYLIST_SUCCESS,    //success
    data: action.data,
  });
}

function* watchAddPlaylists() {
  yield takeLatest(ADD_PLAYLIST_REQUEST, addPlayList);    //request
}

export default function* videoSaga() {
  yield all([fork(watchAddPlaylists)]);
}
