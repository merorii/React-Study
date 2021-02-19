import { useState, useEffect } from 'react';
import axios from 'axios';
import { addPlaylistRequest } from '../reducers/video';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.params = { key: 'AIzaSyAc7yH7Fr2Qt4mHnes5rs2thNCB4otuHt4' };
// axios.defaults.params = { key: 'AIzaSyB86gUYv14tA0bFngwqxzUsWYIQI5eRNg4' };
// process.env.REACT_APP_API_KEY
const useAxios = (keyword) => {
  const [state, setState] = useState({});
  const [error, setError] = useState('');

  const [params, setParams] = useState({
    part: 'snippet',
    q: `${keyword}노래모음`,
    maxResults: 20,
    type: 'video',
    videoDuration: 'long'
  });

  const [trigger, setTrigger] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/search', { params })
      .then((response) => {
        console.log(response);
        if (!response) {
          setError('검색된 영상이 없습니다.');
          return;
        }
        const itemRandom = Math.floor(Math.random() * 20);
        console.log(itemRandom);
        console.log(response.data);
        console.log(response.data.items[itemRandom]);
        setState(response.data.items[itemRandom]);
        dispatch(addPlaylistRequest(response.data.items[itemRandom]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [trigger]);

  const changeKeyword = (keyword) => {
    setParams({ ...params, q: `${keyword} 노래모음` });
    setTrigger(Date.now());
  };

  return { state, error, changeKeyword };
};

export default useAxios;
