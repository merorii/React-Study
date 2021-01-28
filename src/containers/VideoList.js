import React from 'react';
import styled from 'styled-components';
import Video from '../components/Video';

const VideoListBlock = styled.section`
    display:flex;
    align-items: center;
    height:10rem;
    background:#999;
    padding:0 1rem;
`;

const VideoList = ()=>{
    return(
        <VideoListBlock>
            <Video title='썸네일1'/>
            <Video title='썸네일2'/>
            <Video title='썸네일3'/>
        </VideoListBlock>
    )
}

export default VideoList;