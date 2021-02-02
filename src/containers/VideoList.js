import React, {useState} from 'react';
import styled from 'styled-components';
import Video from '../components/Video';
import axios from 'axios';

const API_KEY = "AIzaSyBW-rM9C6eka3hiX6WL_URaNkS0dFMsoNw";

const VideoListBlock = styled.section`
    display:flex;
    align-items: center;
    height:12rem;
    background:#999;
    padding:0 1rem;
`;

const VideoList = (props)=>{
    
  const [data, setData] = useState(null);
  const params ={
    key:API_KEY,
    part:'snippet',
    q:`${props.category}노래모음`,
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
    return(
        <VideoListBlock>
            <button onClick={onClick}>불러오기</button>
            {data && 
            data.items.map((item)=>
                <Video 
                  title={item.snippet.title} 
                  thumb={item.snippet.thumbnails.medium.url} 
                  key={item.id.videoId} 
                  vid={item.id.videoId} 
                  setVideoId={props.setVideoId}
                />
            )}
        </VideoListBlock>
    )
}

export default VideoList;