import produce from 'immer';

export const ADD_PLAYLIST_REQUEST = 'ADD_PLAYLIST_REQUEST';

export const addPlaylistRequest = (data) => ({
  type: ADD_PLAYLIST_REQUEST,
  data,
});


const initialState = {
  playList: null,
  backgroundBg: '',
  title: '',
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_PLAYLIST_REQUEST:
        console.log(draft)
        draft.playList = action.data.id.videoId;
        draft.backgroundBg = action.data.snippet.thumbnails.high.url;
        draft.title = action.data.snippet.title;
        break;
      default:
        break;
    }
  });

export default reducer;
