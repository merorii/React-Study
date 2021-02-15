import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { playBookmarkPlaylist } from '../reducers/video';

const VideoBlock = styled.section`
    color:#fff;
    margin: 0 1vw 2vh;
`;

const VideoThumb = styled.img`
    width:100%;
    height:12vh;
    color:#fff;
`;

const VideoTitle = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden; 
    margin:0;
    color:#fff;
    font-size: 0.8rem;
`;

const VideoList = ({video})=>{
    
  const dispatch = useDispatch();

    const onClick = () => {
        console.log(video);
        dispatch(playBookmarkPlaylist(video));
    }
    return(
        <>
        <VideoBlock onClick={onClick}>
            <VideoThumb src={video.thumbnail} alt={video.title}/>
            <VideoTitle>{video.title}</VideoTitle>
        </VideoBlock>
        </>
    );
}

export default VideoList;