import produce from 'immer';

const initialState = {
  user: [],
  //  {
  //    id: null,
  //    name: ""
  //    email: "",
  //  }
  bookmark:[],
    // {
    //   id: null
    //   title: ""
    //   videoId: null
    // }

  loginLoading: false,
  loginDone: false,
  loginError: null,
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const ADD_LIST_BOOKMARK = 'ADD_LIST_BOOKMARK';
export const DELETE_LIST_BOOKMARK = 'DELETE_LIST_BOOKMARK';

export const loginRequestAction = data => ({
  type: LOGIN_REQUEST,
  data,
});

export const logoutRequestAction = data => ({
  type: LOGOUT_REQUEST,
  data,
});

export const addListBookmark = data => ({
  type: ADD_LIST_BOOKMARK,
  data,
})

export const deleteListBookmark = data => ({
  type: DELETE_LIST_BOOKMARK,
  data,
})

const getNewId = () => {
  const newId = moment().format('YYYYMMDDHHmmss');
  return parseInt(newId)
}

const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      draft.loginDone = false;
      draft.loginError = null;
      break;
    case LOGIN_SUCCESS:
      draft.user = {id: getNewId(), name: action.name, email: action.email };
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.loginError = null;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginDone = false;
      draft.loginError = action.error;
      break;
    case LOGOUT_REQUEST : 
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
    case ADD_LIST_BOOKMARK: break;
    case DELETE_LIST_BOOKMARK: break;
    default:
      return state;
  }
});

export default reducer;