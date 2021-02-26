// import React, { useState,useEffect } from 'react';
// import useSWR from 'swr';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
// axios.defaults.params = {key: process.env.REACT_APP_YOUTUBE_KEY};

// const fetcher = (url, value) => axios.get(url, value).then(res => res.data.items)

// function Playlist({keyword}) {
//   const [ params, setParams ] = useState({
//     params: {
//       part: "snippet",
//       maxResults: 5,
//       q: `${keyword} 노래모음`,
//       type: "video"
//     }
//   });
//   const data = {params}
//   const { data: video, error } = useSWR(['/search', params], fetcher);

//   useEffect(() => {
//     const newObj = {...params};
//     const {params: {q}} = newObj
//     // newObj.params.q = `${keyword} 노래모음`;
//     setParams(
//       newObj
//     );
//   }, [keyword]);

//   console.log(params);
//   console.log(video, error);
//   return (
//     <div>
//       <h1>useSWR을 이용한 방법</h1>
//       { video?.map((item, index) => (
//         <div key={item.snippet.title}>
//           <p>{item.snippet.title}</p>
//           <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}></img>
//         </div>
//           )
//         )
//       }
//     </div>
//   )
// }

// export default Playlist

