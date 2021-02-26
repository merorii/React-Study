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

  category: [
    {
      id: 1,
      title: '아이유',
      color: '#c86b85'
    },
    {
      id: 2,
      title: '아이유 크리스마스',
      color: '#719192'
    },
    {
      id: 3,
      title: '디즈니',
      color: '#2d4059'
    },
    {
      id: 4,
      title: '잔나비',
      color: '#3c4245'
    },
    {
      id: 5,
      title: '십센치',
      color: '#c86b85'
    },
    {
      id: 6,
      title: '아이즈원',
      color: '#719192'
    },
  ],

  bookmark: [],
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

export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_LIST_BOOKMARK_REQUEST = 'ADD_LIST_BOOKMARK_REQUEST';
export const ADD_LIST_BOOKMARK_SUCCESS = 'ADD_LIST_BOOKMARK_SUCCESS';
export const DELETE_LIST_BOOKMARK_REQUEST = 'DELETE_LIST_BOOKMARK_REQUEST';
export const DELETE_LIST_BOOKMARK_SUCCESS = 'DELETE_LIST_BOOKMARK_SUCCESS';

export const loginRequestAction = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequestAction = (data) => ({
  type: LOGOUT_REQUEST,
  data,
});

export const addListCategoryRequest = (data) => ({
  type: ADD_CATEGORY_REQUEST,
  data,
});

export const addListCategorySuccess = (data) => ({
  type: ADD_CATEGORY_SUCCESS,
  data,
});

export const addListBookmarkRequest = (data) => ({
  type: ADD_LIST_BOOKMARK_REQUEST,
  data,
});

export const addListBookmarkSuccess = (data) => ({
  type: ADD_LIST_BOOKMARK_SUCCESS,
  data,
});

export const deleteListBookmarkRequest = (data) => ({
  type: DELETE_LIST_BOOKMARK_REQUEST,
  data,
});

export const deleteListBookmarkSuccess = (data) => ({
  type: DELETE_LIST_BOOKMARK_SUCCESS,
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
        console.log('login request');
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        console.log('login request success');

        draft.user = { id: getNewId(), name: action.name, email: action.email };
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.loginError = null;
        break;
      case LOGIN_FAILURE:
        console.log('login request failure');

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
      case ADD_CATEGORY_REQUEST:
        draft.category.push({
          id: state.category.length+1,
          title: action.data.text,
          color: action.data.color
        });
        console.log(state.category)
        break;
      case ADD_CATEGORY_SUCCESS:
        draft.category.push({
          id: state.category.length+1,
          title: action.data.text,
          color: action.data.color
        });
        console.log(state.category)
        break;
      case ADD_LIST_BOOKMARK_REQUEST:
        draft.bookmark.push({
          title: action.data.title,
          videoId: action.data.playList,
          thumbnail: action.data.backgroundBg,
          keyword: action.data.keyword
        });
        break;
      case ADD_LIST_BOOKMARK_SUCCESS:
        draft.bookmark.push({
          title: action.data.title,
          videoId: action.data.playList,
          thumbnail: action.data.backgroundBg,
          keyword: action.data.keyword
        });
        break;
      case DELETE_LIST_BOOKMARK_REQUEST:
        draft.bookmark = draft.bookmark.filter(bookmark => bookmark.videoId !== action.data.playList);
        break;
      case DELETE_LIST_BOOKMARK_SUCCESS:
        draft.bookmark = draft.bookmark.filter(bookmark => bookmark.videoId !== action.data.playList);
        break;
      default:
        return draft;
    }
  });

export default reducer;
