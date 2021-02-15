import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//lib
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faStar } from '@fortawesome/free-solid-svg-icons';


//conponents
import CategoryList from './CategoryList';
import VideoList from '../components/Video';

const SideWrap = styled.div`
  display: flex;
  height: 100vh;
  margin-right: 0.5rem;
  text-align: center;
`
const SideStyle = styled.div`
  width: 30px;
  background: #000;
  padding-top: 1vh;
  color: #fff;
  border-right: 1px solid rgba(255,255,255,.4);
`
const SideActiveStyle = styled.div`
  width: 200px;
  overflow-y: scroll;
  background: rgba(0,0,0,0.6);
  ::-webkit-scrollbar {
    display: none;
  }
`
const SideActiveCloseStyle = styled.div`
color: #fff;
text-align: right;
padding: 0 10px 1vh 0;
font-size: 30px;
`


const SideMenu = () => {
  const [closeSide, setCloseSide] = useState(true);
  const [visibleList, setVisibleList] = useState(false);
  const [visibleBookmark, setVisibleBookMark] = useState(false);

  const video = useSelector((state) => state.user);

  const visibleCategory = () => {
    if (visibleList) {
      setVisibleList(false);
      setCloseSide(true);
    } else {
      setVisibleList(true);
      setCloseSide(false);
      setVisibleBookMark(false);
    }
  }

  const visibleBookMark = () => {
    if (visibleBookmark) {
      setVisibleBookMark(false);
      setCloseSide(true);
    } else {
      setVisibleBookMark(true);
      setCloseSide(false);
      setVisibleList(false);
    }
  }

  const closeSideMenu = () => {
    setCloseSide(true);
    setVisibleBookMark(false);
    setVisibleList(false)
  }

  return (
    <SideWrap>
      <SideStyle>
        <span onClick={visibleCategory}><FontAwesomeIcon icon={faList} style={{ color: visibleList ? 'pink' : 'white', marginBottom: '1vh' }} /></span>
        <span onClick={visibleBookMark}><FontAwesomeIcon icon={faStar} style={{ color: visibleBookmark ? 'pink' : 'white', marginBottom: '1vh' }} /></span>
      </SideStyle>
      {
        !closeSide ?
          (<SideActiveStyle>
            <SideActiveCloseStyle onClick={closeSideMenu}>
              x
            </SideActiveCloseStyle>
            {visibleList && <CategoryList></CategoryList>}
            {visibleBookmark && video.bookmark.map((video)=><VideoList video={video}></VideoList>)}
          </SideActiveStyle>)
          : <></>
      }
    </SideWrap>
  )
}

export default SideMenu;