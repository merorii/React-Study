import produce from 'immer';
import moment from 'moment';
import 'moment/locale/ko';

const initialState = {
  user: [],
  //  {
  //    id: null,
  //    name: ""
  //    email: "",
  //  }

  bookmark:[],
  // {
  //   title: "",
  //   videoId: null,
  //   thumbnail: ""
  // },

  loginLoading: false,
  loginDone: false,
  loginError: null,
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const ADD_LIST_BOOKMARK = 'ADD_LIST_BOOKMARK';
export const DELETE_LIST_BOOKMARK = 'DELETE_LIST_BOOKMARK';

export const loginRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequestAction = (data) => ({
  type: LOGOUT_REQUEST,
  data,
});

export const addListBookmark = (data) => ({
  type: ADD_LIST_BOOKMARK,
  data,
});

export const deleteListBookmark = (data) => ({
  type: DELETE_LIST_BOOKMARK,
  data,
});

const getNewId = () => {
  const newId = moment().format('YYYYMMDDHHmmss');
  return parseInt(newId);
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    // console.log(draft);
    // console.log(state)
    switch (action.type) {
      case LOGIN_REQUEST:
        console.log("login request")
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        console.log("login request success")

        draft.user = { id: getNewId(), name: action.name, email: action.email };
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.loginError = null;
        break;
      case LOGIN_FAILURE:
        console.log("login request failure")

        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = action.error;
        break;
      case LOGOUT_REQUEST:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.loginError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.user = null;
        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGOUT_FAILURE:
        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = action.error;
        break;
      case ADD_LIST_BOOKMARK:
        draft.bookmark.push({
          title: action.data.title,
          videoId: action.data.playList,
          thumbnail: action.data.backgroundBg,
          bookmark: true
        });
        break;
      case DELETE_LIST_BOOKMARK:
        draft.bookmark = draft.bookmark.filter(bookmark => bookmark.videoId !== action.data.playList);
        break;
      default:
        return draft;
    }
  });

export default reducer;
