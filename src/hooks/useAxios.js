import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { addPlaylistRequest, addPlaylistSuccess } from '../reducers/video';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.params = { key: process.env.REACT_APP_API_KEY };
// axios.defaults.params = { key: 'AIzaSyAXb_LCENUcqkSlA7hC3Nwv2t87VDctpNw' };
const useAxios = (keyword) => {
  const [state, setState] = useState({});
  const [error, setError] = useState('');

  const [params, setParams] = useState({
    part: 'snippet',
    q: `${keyword}노래모음`,
    maxResults: 20,
    type: 'video',
    videoDuration: 'long',
    keyword: keyword
  });

  const [currentKeyword, setCurrentKeyword] = useState(keyword);
  const dispatch = useDispatch();

  // const findLink = useCallback(() => {
  //   axios.get('/search', { params })
  //   .then((response) => {
  //     console.log(response);
  //     if (!response) {
  //       setError('검색된 영상이 없습니다.');
  //       return;
  //     }
  //     const itemRandom = Math.floor(Math.random() * 20);
  //     console.log(response.data.items[itemRandom]);
  //     // setState(response.data.items[itemRandom]);
  //     dispatch(addPlaylistSuccess(response.data.items[itemRandom]));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, [params, dispatch]);
  useEffect(()=> {
    axios.get('/search', { params })
      .then((response) => {
        if (!response) {
          setError('검색된 영상이 없습니다.');
          return;
        }
        const itemRandom = Math.floor(Math.random() * 20);
        console.log(response.data.items[itemRandom]);
        dispatch(addPlaylistSuccess({videoItem: response.data.items[itemRandom], videoKeyword: currentKeyword}));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, dispatch, keyword, currentKeyword])

  const changeKeyword = (keyword) => {
    setParams({ ...params, q: `${keyword} 노래모음`});
    setCurrentKeyword(keyword);
  };

  return { state, error, changeKeyword };
};

export default useAxios;
