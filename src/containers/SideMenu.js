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
  padding: 20px 0;
  box-sizing: border-box;
  width: 30px;
  height: 100%;
  background: rgba(0,0,0, .3);
  text-align: center;
  color: #fff;
  border-right: 1px solid rgba(255,255,255,.4);
`
const SideActiveStyle = styled.div`
  position: relative;
  width: 200px;
  overflow-y: scroll;
  background: rgba(0,0,0,0.6);
  ::-webkit-scrollbar {
    display: none;
  }
`

const SideActiveCloseStyle = styled.div`
  position: absolute;
  left: calc(100% - 40px);
  top: 10px;
  width: 40px;
  height: 40px;

  &:after {
    content: '';
    position: absolute;
    width: 1.5px;
    height: 20px;
    background: #fff;
    transform: translate(-50%, -50%) rotate(-45deg);
    left: 50%;
    top: 50%;
  }
  &:before {
    content: '';
    position: absolute;
    width: 1.5px;
    height: 20px;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`


const SideMenu = () => {
  const [closeSide, setCloseSide] = useState(true);
  const [visibleList, setVisibleList] = useState(false);
  const [visibleBookmark, setVisibleBookMark] = useState(false);

  const video = useSelector((state) => state.user);

  const visibleCategory = () => {
    if (visibleList) {
      setCloseSide(true);
      setVisibleList(false);
    } else {
      setVisibleList(true);
      setCloseSide(false);
      setVisibleBookMark(false);
    }
  }

  const visibleBookMark = () => {
    if (visibleBookmark) {
      setCloseSide(true);
      setVisibleBookMark(false)
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
        <span onClick={visibleCategory}><FontAwesomeIcon icon={faList} style={{ color: visibleList ? 'skyblue' : 'white' }} /></span>
        <span onClick={visibleBookMark}><FontAwesomeIcon icon={faStar} style={{ marginTop: 20, color: visibleBookmark ? 'gold' : 'white' }} /></span>
      </SideStyle>
      {
        !closeSide ?
          (<SideActiveStyle>
            <SideActiveCloseStyle onClick={closeSideMenu} />
            {visibleList && <CategoryList></CategoryList>}
            {visibleBookmark && video.bookmark.map((video)=><VideoList video={video}></VideoList>)}
          </SideActiveStyle>)
          : <></>
      }
    </SideWrap>
  )
}

export default SideMenu;