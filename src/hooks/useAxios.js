import { useState, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { playVideo } from '../reducers/play';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.params = { key: process.env.REACT_APP_API_KEY };

const useAxios = (keyword) => {
  const [state, setState] = useState({});
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    part: 'snippet',
    q: `${keyword}노래모음`,
    maxResults: 20,
    type: 'video',
    key: 'AIzaSyAc7yH7Fr2Qt4mHnes5rs2thNCB4otuHt4',
  });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    axios
      .get('/search', { params })
      .then((response) => {
        if (!response) {
          setError('검색된 영상이 없습니다.');
          return;
        }
        const itemRandom = Math.floor(Math.random() * 20);
        console.log(itemRandom);
        console.log(response.data.items[itemRandom]);
        setState(response.data.items[itemRandom]);
        dispatch(playVideo(response.data.items[itemRandom]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, params, trigger]);

  const changeKeyword = (keyword) => {
    setParams({ ...params, q: `${keyword} 노래모음` });
    setTrigger(Date.now());
  };

  return { state, error, changeKeyword };
};

export default useAxios;
