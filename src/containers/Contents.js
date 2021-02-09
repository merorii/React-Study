import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faStar } from '@fortawesome/free-solid-svg-icons';


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// library.add(faBars);

const ContentsBlock = styled.main`
  width: 100%;
  height: 100vh;
`;

const Video = styled.div`
  position:relative; 
  height:0;
  width:100%;
  padding-bottom:56.25%; 
`;

const VideoWrap = styled.div`
  width: 80vw;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const VideoBottomStyle = styled.div`
  display:flex;
  justify-content: space-between;
`;


const Main = () => {
  const [addBookMarkList, setAddBookmarkList] = useState(false);

  const video = useSelector((state) => state.video);
  const videoUrl = `https://www.youtube.com/watch?v=${video.playList}`;

  const dispatch = useDispatch();
  const addBookMark = () => {
    addBookMarkList ? setAddBookmarkList(false) : setAddBookmarkList(true);
  }

  return (
    <ContentsBlock>
      <VideoWrap >
        <Video>
          <ReactPlayer url={videoUrl} playing loop controls width={'100%'} height={'100%'} style={{
            position: 'absolute',
            top: 0,
            left: 0
          }} />
        </Video>
        <VideoBottomStyle>
          <span>
            {video.title}
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} style={{ color: addBookMarkList ? 'red' : 'white' }} onClick={addBookMark} />
          </span>
        </VideoBottomStyle>
      </VideoWrap>
    </ContentsBlock>
  );
};

export default Main;
