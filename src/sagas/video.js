const initialState = {
  
  playLists: null,
  
  // object
  // {
  //   id: number
  //   keyword: string
  //   videos: [],
  // }
}

export const ADD_PLAYLIST_REQUEST = 'ADD_PLAYLIST_REQUEST';
export const DELETE_PLAYLIST_REQUEST = 'DELETE_PLAYLIST_REQUEST';

export const addPlaylistRequest = data => ({
  type: ADD_PLAYLIST_REQUEST,
  data,
});

export const deletePlaylistRequest = data => ({
  type: DELETE_PLAYLIST_REQUEST,
  data,
});


const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case ADD_PLAYLIST_REQUEST:
      draft.playLists.videos.push(action.data);
      break;
    case DELETE_PLAYLIST_REQUEST:
      draft.playLists.videos = [];
      break;
    default:
      break;      
    }
  })

export default reducer