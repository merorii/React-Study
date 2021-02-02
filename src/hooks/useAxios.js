import { useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.params = {key: process.env.REACT_APP_YOUTUBE_KEY};

export const useAxios = (key) => {

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [ params, setParams ] = useState({
    params: {
      part: "snippet",
      maxResults: 3,
      q: `${key} 노래모음`,
      type: "video"
    }
  });
  const [ trigger, setTrigger ] = useState(0);
  useEffect(() => {
    axios.get('/search', params)
      .then(res => {
        setState({
          ...state,
          loading: false,
          data: res.data.items,
        });
      })
      .catch(err => {
        setState({
          ...state,
          loading: false,
          error: err,
        })
      })
  }, [trigger]);

  if (!key) {
    return;
  }
  const changeKeyword = (keyword) => {
    setState({
      ...state,
      loading: true,
    });

    const param = {...params};
    param.params.q = `${keyword} 노래모음`;
    setParams(param);
    
    setTrigger(Date.now());
  };

  return { ...state, changeKeyword };
};

export default useAxios;
