//base
import React from 'react';

//libs
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { playBookmarkPlaylist } from '../reducers/video';

const VideoBlock = styled.section`
  width: 180px;
  text-align: center;
  color: #fff;
  margin: 2vh 10px 2vh;
`;

const VideoThumb = styled.img`
  width: 100%;
`;

const VideoTitle = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 180px;
  margin: 0;
  font-size: 0.8rem;
`;

const VideoList = ({ video }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(playBookmarkPlaylist(video));
  };
  return (
    <VideoBlock onClick={onClick}>
      <VideoThumb src={video.thumbnail} alt={video.title} />
      <VideoTitle>{video.title}</VideoTitle>
    </VideoBlock>
  );
};

export default VideoList;
