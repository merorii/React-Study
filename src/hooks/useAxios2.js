import React, {useState} from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyBW-rM9C6eka3hiX6WL_URaNkS0dFMsoNw";

const useAxios = (category)=>{
  const [data, setData] = useState(null);
  const params ={
    key:API_KEY,
    part:'snippet',
    q:`${category}노래모음`,
    maxResults: 5,
    type: 'video'
  }
  let url = 'https://www.googleapis.com/youtube/v3/search?';
  for (var param in params){
    url += param+"="+params[param]+"&";
  }
  url = url.substr(0, url.length-1);
  const onClick = async()=>{
    try{
      const response = await axios.get(url);  
      setData(response.data);  
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      {data && 
      <>
      <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />
      {data.items.map((item)=>(
          <div>
            <div>{item.snippet.title}</div>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
          </div>
        )
      )}
      </>
    }
    </div>
  );
}

export default useAxios;