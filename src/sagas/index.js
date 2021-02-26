import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import videoSaga from './video';

export default function* rootSaga() {
    yield all ([
        fork(userSaga),
        fork(videoSaga),
    ])
}