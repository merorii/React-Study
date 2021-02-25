//base
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//hooks
import { useAxios, WindowSize } from 'hooks';

//lib
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar } from '@fortawesome/free-solid-svg-icons';

//conponents
import { CategoryList } from 'containers';
import VideoList from '../components/Video';

const SideWrap = styled.div`
  display: flex;
  /* height: 100vh; */
  margin-right: 0.5rem;
  text-align: center;
`
const SideStyle = styled.div`
  padding: ${(props) => (props.onlyIsTablet ? '0 20px' : '20px 0')};
  box-sizing: border-box;
  width: ${(props) => (props.onlyIsTablet ? '100%' : '30px')};
  height: ${(props) => (props.onlyIsTablet ? '50px' : '100%')};
  background: rgba(255, 255, 255, 0.6);
  text-align: ${(props) => (props.onlyIsTablet ? 'left' : 'center')};
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  ${(props) => props.onlyIsTablet && 'display: flex; align-items: center; bottom: 0; position: fixed;'};

  .fav {
    display: inline-block;
    margin: ${(props) => (props.onlyIsTablet ? '0 0 0 20px' : '20px 0 0')};
  }

  .keyword {
    color: white;
    display:inline-block;
    background: black;
    font-size: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 15px;
    text-align: center;
    margin: ${(props) => (props.onlyIsTablet ? '0 0 0 20px' : '20px 0 0')};
  }
`;
const SideActiveStyle = styled.div`
  position: ${(props) => (props.onlyIsTablet ? 'absolute' : 'relative')};
  width: ${(props) => (props.onlyIsTablet ? '100vw' : '200px')};
  height: ${(props) => (props.onlyIsTablet ? '22vh' : '100vh')};
  overflow-x: ${(props) => (props.onlyIsTablet ? 'scroll' : 'hidden')};
  overflow-y: ${(props) => (props.onlyIsTablet ? 'hidden' : 'scroll')};
  background: rgba(255, 255, 255, 0.3);
  padding: ${(props) => (props.onlyIsTablet ? '0' : '60px 0')};
  box-sizing: border-box;
  text-align: ${(props) => (props.onlyIsTablet ? 'left' : 'center')};
  ${(props) => props.onlyIsTablet && 'bottom: 50px;'}
  ${(props) =>
    props.onlyIsTablet && 'display: flex; align-items: center;'
  };
  ::-webkit-scrollbar {
    display: none;
  };
`;

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
`;

const SideMenu = () => {
  const [closeSide, setCloseSide] = useState(true);
  const [visibleList, setVisibleList] = useState(false);
  const [visibleBookmark, setVisibleBookMark] = useState({
    state: false,
    keyword: '',
  });

  const { onlyIsTablet } = WindowSize();
  const video = useSelector((state) => state.user);

  const visibleCategory = () => {
    if (visibleList) {
      setCloseSide(true);
      setVisibleList(false);
    } else {
      setVisibleList(true);
      setCloseSide(false);
      setVisibleBookMark({...visibleBookmark, state: false});
    }
  };

  const visibleBookMarkList = (keyword) => {
    if (visibleBookmark.state) {
      setCloseSide(true);
      setVisibleBookMark({...visibleBookmark, state: false});
    } else {
      setVisibleBookMark({keyword: keyword, state: true});
      setCloseSide(false);
      setVisibleList(false);
    }
  };

  const closeSideMenu = () => {
    setCloseSide(true);
    setVisibleBookMark({...visibleBookmark, state: false});
    setVisibleList(false);
  };

  const { error, changeKeyword } = useAxios('아이유');
  const onClick = (keyword) => {
    changeKeyword(keyword);
  };
  if (error) {
    console.log(error);
    return;
  }

  return (
    <SideWrap>
      <SideStyle onlyIsTablet={onlyIsTablet}>
        <span onClick={visibleCategory}>
          <FontAwesomeIcon icon={faList} style={{ color: visibleList ? 'skyblue' : 'white' }} />
        </span>
        <span onClick={()=>{visibleBookMarkList('ALL')}} className="fav">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: visibleBookmark.state ? 'gold' : 'white',
            }}
          />
        </span>

        <span className='keyword' onClick={()=>{visibleBookMarkList('아이유')}}>아</span>
        <span className='keyword' onClick={()=>{visibleBookMarkList('아이유 크리스마스')}}>아</span>
        <span className='keyword' onClick={()=>{visibleBookMarkList('디즈니')}}>디</span>
        <span className='keyword' onClick={()=>{visibleBookMarkList('잔나비')}}>잔</span>
        <span className='keyword' onClick={()=>{visibleBookMarkList('10cm')}}>십</span>
        <span className='keyword' onClick={()=>{visibleBookMarkList('아이즈원')}}>아</span>
      </SideStyle>
      {!closeSide ? (
        <SideActiveStyle onlyIsTablet={onlyIsTablet} visibleBookmark={visibleBookmark.state}>
          <SideActiveCloseStyle onlyIsTablet={onlyIsTablet} onClick={closeSideMenu} />
          {visibleList && <CategoryList onClick={onClick}></CategoryList>}
          {(visibleBookmark.state && visibleBookmark.keyword==='ALL')  
            && video.bookmark.map((video, idx) => <VideoList video={video} key={idx}></VideoList>)
          }
          {(visibleBookmark.state && visibleBookmark.keyword!=='ALL')
            && video.bookmark.map((video, idx) => {
              if(video.keyword === visibleBookmark.keyword) {
                return <VideoList video={video} key={idx}></VideoList>} 
              else return <></>}
            )
          }
        </SideActiveStyle>
      ) : (
        <></>
      )}
    </SideWrap>
  );
};

export default SideMenu;
