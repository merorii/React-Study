import React from 'react';
import styled from 'styled-components';

const VideoBlock = styled.section`
    width:15rem;
    height:8rem;
    line-height:8rem;
    text-align:center;
    background: #222;
    color:#fff;
    & + & {
      margin-left: 1rem;
    }    
`;

const VideoList = (props)=>{
    return(
        <VideoBlock>
            {props.title}
        </VideoBlock>
    );
}

export default VideoList;