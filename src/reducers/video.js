import produce from 'immer';

export const ADD_PLAYLIST_REQUEST = 'ADD_PLAYLIST_REQUEST';
export const PLAY_BOOKMARK_PLAYLIST = 'PLAY_BOOKMARK_PLAYLIST';

export const addPlaylistRequest = (data) => ({
  type: ADD_PLAYLIST_REQUEST,
  data,
});

export const playBookmarkPlaylist = (data) => ({
  type: PLAY_BOOKMARK_PLAYLIST,
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
        // console.log(draft)
        draft.playList = action.data.id.videoId;
        draft.backgroundBg = action.data.snippet.thumbnails.high.url;
        draft.title = action.data.snippet.title;
        break;
      case PLAY_BOOKMARK_PLAYLIST:
        draft.playList = action.data.videoId;
        draft.backgroundBg = action.data.thumbnail;
        draft.title = action.data.title;
        draft.bookMarkState = action.data.bookmark;
        break;
      default:
        break;
    }
  });

export default reducer;
