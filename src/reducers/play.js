import produce from 'immer';
import { createAction } from 'redux-actions';
const initialState = {
  play: {},
};

export const GET_PLAY_LIST = 'GET_PLAY_LIST';

export const playVideo = (data) =>
  createAction({
    type: GET_PLAY_LIST,
    data,
  });

// export function playVideo(data) {
//   return {
//     type: GET_PLAY_LIST,
//     data,
//   };
// }

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PLAY_LIST:
        console.log(draft);
        break;
      default:
        break;
    }
  });

export default reducer;
