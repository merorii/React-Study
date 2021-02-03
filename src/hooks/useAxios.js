import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.params = {key: process.env.REACT_APP_API_KEY};

const useAxios = (keyword) => {
  
  const [state, setState] = useState({});
  const [error, setError] = useState('');

  const [params, setParams] = useState({
    part:'snippet',
    q:`${keyword}노래모음`,
    maxResults: 20,
    type: 'video'
  });

  const [ trigger, setTrigger ] = useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
      axios.get('/search', {params})
        .then(response => {
          if(!response) {
            setError('검색된 영상이 없습니다.');
            return;
          }
          const itemRandom = Math.floor( Math.random() * 20 );
          console.log(itemRandom);
          console.log(response.data.items[itemRandom]);
          setState(response.data.items[itemRandom]);
          dispatch(액션이름(response.data.items[itemRandom]));
        })      
        .catch(err => {
          console.log(err);
        })
  }, [trigger]);

  const changeKeyword = (keyword) => {
    setParams({...params, q:`${keyword} 노래모음`})
    setTrigger(Date.now());
  };

  return {state, error, changeKeyword};
}

export default useAxios;