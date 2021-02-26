import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { addListBookmark, deleteListBookmark } from '../reducers/user';

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
  margin-top: 1vh;
`;


const Main = () => {
  const [addBookMarkList, setAddBookmarkList] = useState(false);
  
  const video = useSelector((state) => state.video);
  const videoUrl = `https://www.youtube.com/watch?v=${video.playList}`;
  const bookmarkList = useSelector((state) => state.user.bookmark);

  // useEffect(()=>{
  //   bookmarkList.forEach((value)=>{
  //     if(video.playList === value.videoId) {setAddBookmarkList(true); return;}
  //     else setAddBookmarkList(false);
  //   });
  // },[video, bookmarkList]);
  
  const dispatch = useDispatch();
  const addBookMark = () => {
    if(video.bookMarkState){
      setAddBookmarkList(false);
      dispatch(deleteListBookmark(video));
    }else{
      setAddBookmarkList(true);
      dispatch(addListBookmark(video));
    }
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
          <span>{console.log(video.bookMarkState)}
            <FontAwesomeIcon icon={faHeart} style={{ color: addBookMarkList ? 'red' : 'white' }} onClick={addBookMark} />
          </span>
        </VideoBottomStyle>
      </VideoWrap>
    </ContentsBlock>
  );
};

export default Main;
