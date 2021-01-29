import React, {  useEffect } from 'react';
import useAxios from '../hooks/useAxios';

function PlaylistHooks({keyword}) {
  const { loading, error, data: videos, changeKeyword } = useAxios(keyword);
  
  useEffect(() => {
    changeKeyword(keyword);
  }, [keyword]);

  console.log(loading, error, videos);

  return (
    <div>
      <h1>useAxios를 이용한 방법</h1>
      { videos?.map((item, index) => (
        <div key={item.snippet.title}>
          <p>{item.snippet.title}</p>
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}></img>
        </div>
          )
        )
      }
    </div>
  )
}

export default PlaylistHooks
