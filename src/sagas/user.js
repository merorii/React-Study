import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../reducers/user";

function* login(action) {
  try {
    yield delay(500);
    yield put({
      type: LOGIN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: "비밀번호를 다시 입력해주세요",
    });
  }
}
function* watchLogout() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* logout(action) {
  try {
    yield delay(500);
    yield put({
      type: LOGOUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      error: "페이지에 오류가 있습니다.",
    });
  }
}
function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
