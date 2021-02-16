import React from 'react';
import styled from 'styled-components';

const VideoBlock = styled.section`
    width:15rem;
    text-align:center;
    color:#fff;
    & + & {
        margin-left: 1rem;
    } 
`;

const VideoThumb = styled.img`
    width:100%;
`;

const VideoTitle = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden; 
    width: 15rem;
    margin:0;
`;

const VideoList = (props)=>{
    const onClick=()=>{
        props.setVideoId(props.vid)
    }
    return(
        <VideoBlock onClick={onClick}>
            <VideoThumb src={props.thumb} alt={props.title}/>
            <VideoTitle>{props.title}</VideoTitle>
        </VideoBlock>
    );
}

export default VideoList;