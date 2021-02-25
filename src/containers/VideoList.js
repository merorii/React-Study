//base
import React from 'react';

//libs
import styled from 'styled-components';

//components
import { Video } from 'components';

const VideoListBlock = styled.section`
  display: flex;
  align-items: center;
  height: 12rem;
  background: #999;
  padding: 0 1rem;
`;

const VideoList = () => {
  return (
    <VideoListBlock>
      <Video />
    </VideoListBlock>
  );
};

export default VideoList;
