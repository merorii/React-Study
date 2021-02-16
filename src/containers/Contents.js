//base
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//hooks
import { WindowSize } from 'hooks';

//libs
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ContentsBlock = styled.main`
  width: 100%;
  height: 100vh;
`;

const Video = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
`;

const VideoWrap = styled.div`
  width: 80vw;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1rem;
  ${(props) => props.onlyIsTablet && 'display: flex; flex-direction: column-reverse;'}
`;

const VideoBottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  line-height: 1rem;
`;

const Main = () => {
  const { onlyIsTablet } = WindowSize();

  const [addBookMarkList, setAddBookmarkList] = useState(false);

  const video = useSelector((state) => state.video);
  const videoUrl = `https://www.youtube.com/watch?v=${video.playList}`;

  const addBookMark = () => {
    addBookMarkList ? setAddBookmarkList(false) : setAddBookmarkList(true);
  };

  return (
    <ContentsBlock>
      <VideoWrap onlyIsTablet={onlyIsTablet}>
        <Video>
          <ReactPlayer
            url={videoUrl}
            playing
            loop
            controls
            width={'100%'}
            height={'100%'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Video>
        <VideoBottomStyle>
          <span>{video.title}</span>
          <span>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: addBookMarkList ? 'red' : 'white', minWidth: 40 }}
              onClick={addBookMark}
            />
          </span>
        </VideoBottomStyle>
      </VideoWrap>
    </ContentsBlock>
  );
};

export default Main;
