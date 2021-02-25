import produce from 'immer';

export const ADD_PLAYLIST_REQUEST = 'ADD_PLAYLIST_REQUEST';
export const ADD_PLAYLIST_SUCCESS = 'ADD_PLAYLIST_SUCCESS';
export const PLAY_BOOKMARK_PLAYLIST = 'PLAY_BOOKMARK_PLAYLIST';

export const addPlaylistRequest = (data) => ({
  type: ADD_PLAYLIST_REQUEST,
  data,
});
export const addPlaylistSuccess = (data) => ({
  type: ADD_PLAYLIST_SUCCESS,
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
  keyword: '',
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_PLAYLIST_REQUEST:
        draft.playList = action.data.videoItem.id.videoId;
        draft.backgroundBg = action.data.videoItem.snippet.thumbnails.high.url;
        draft.title = action.data.videoItem.snippet.title;
        draft.keyword = action.data.videoKeyword;
        break;
      case ADD_PLAYLIST_SUCCESS:
        draft.playList = action.data.videoItem.id.videoId;
        draft.backgroundBg = action.data.videoItem.snippet.thumbnails.high.url;
        draft.title = action.data.videoItem.snippet.title;
        draft.keyword = action.data.videoKeyword;
        break;
      case PLAY_BOOKMARK_PLAYLIST:
        draft.playList = action.data.videoId;
        draft.backgroundBg = action.data.thumbnail;
        draft.title = action.data.title;
        break;
      default:
        break;
    }
  });

export default reducer;
