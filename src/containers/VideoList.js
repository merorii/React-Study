import React from 'react';
import styled from 'styled-components';
import Video from '../components/Video';

const VideoListBlock = styled.section`
    display:flex;
    align-items: center;
    height:12rem;
    background:#999;
    padding:0 1rem;
`;

const VideoList = ()=>{
    return(
        <VideoListBlock>
          <Video/>
        </VideoListBlock>
    )
}

export default VideoList;