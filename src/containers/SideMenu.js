import React, { useEffect, useState } from 'react';

//lib
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faList, faStar } from '@fortawesome/free-solid-svg-icons';


//conponents
import CategoryList from './CategoryList';

const SideWrap = styled.div`
  display: flex;
  margin-right: 0.5rem;
`
const SideStyle = styled.div`
  width: 30px;
  height: 100%;
  background: #000;
  color: #fff;
  border-right: 1px solid rgba(255,255,255,.4);
`
const SideActiveStyle = styled.div`
  width: 200px;
  height: 100%;
  background: #000;
`
const SideActiveCloseStyle = styled.div`
color: #fff;
text-align: right;
padding-right: 10px;
font-size: 30px;
`


const SideMenu = () => {
  const [closeSide, setCloseSide] = useState(true);
  const [visibleList, setVisibleList] = useState(false);
  const [visibleBookmark, setVisibleBookMark] = useState(false);

  const visibleCategory = () => {
    if (visibleList) {
      setVisibleList(false)
    } else {
      setVisibleList(true);
      setCloseSide(false)
      setVisibleBookMark(false);
    }
  }

  const visibleBookMark = () => {
    if (visibleBookmark) {
      setVisibleBookMark(false)
    } else {
      setVisibleBookMark(true);
      setCloseSide(false)
      setVisibleList(false)
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
        <span onClick={visibleCategory}><FontAwesomeIcon icon={faList} style={{ color: visibleList ? 'pink' : 'white' }} /></span>
        <span onClick={visibleBookMark}><FontAwesomeIcon icon={faStar} style={{ color: visibleBookmark ? 'pink' : 'white' }} /></span>
      </SideStyle>
      {
        !closeSide ?
          (<SideActiveStyle>
            <SideActiveCloseStyle onClick={closeSideMenu}>
              x
          </SideActiveCloseStyle>
            {visibleList && <CategoryList></CategoryList>}
            {visibleBookmark && <div style={{ color: '#fff' }}>리스트가 비어있습니다.</div>}
          </SideActiveStyle>)
          : <></>
      }

    </SideWrap>
  )
}

export default SideMenu;