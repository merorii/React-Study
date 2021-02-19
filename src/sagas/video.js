import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_PLAYLIST_REQUEST } from '../reducers/video';

function* addPlayList(action) {
  yield delay(500);
  yield put({
    type: ADD_PLAYLIST_REQUEST,
    data: action.data,
  });
}

function* watchAddPlaylists() {
  yield takeLatest(ADD_PLAYLIST_REQUEST, addPlayList);
}

export default function* videoSaga() {
  yield all([fork(watchAddPlaylists)]);
}
