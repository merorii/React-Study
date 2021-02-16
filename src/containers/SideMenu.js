//base
import React, { useState } from 'react';

//hooks
import { useAxios, WindowSize } from 'hooks';

//lib
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar } from '@fortawesome/free-solid-svg-icons';

//conponents
import { CategoryList } from 'containers';

const SideWrap = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;
const SideStyle = styled.div`
  padding: ${(props) => (props.onlyIsTablet ? '0 20px' : '20px 0')};
  box-sizing: border-box;
  width: ${(props) => (props.onlyIsTablet ? '100%' : '30px')};
  height: ${(props) => (props.onlyIsTablet ? '50px' : '100%')};
  background: rgba(255, 255, 255, 0.3);
  text-align: ${(props) => (props.onlyIsTablet ? 'left' : 'center')};
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  ${(props) => props.onlyIsTablet && 'display: flex; align-items: center; bottom: 0; position: fixed;'};

  .fav {
    display: inline-block;
    margin: ${(props) => (props.onlyIsTablet ? '0 0 0 20px' : '20px 0 0')};
  }
`;
const SideActiveStyle = styled.div`
  position: ${(props) => (props.onlyIsTablet ? 'absolute' : 'relative')};
  width: ${(props) => (props.onlyIsTablet ? '100vw' : '200px')};
  height: ${(props) => (props.onlyIsTablet ? '22vh' : '100%')};
  background: rgba(255, 255, 255, 0.3);
  padding: ${(props) => (props.onlyIsTablet ? '20px 0 0' : '60px 0')};
  box-sizing: border-box;
  text-align: ${(props) => (props.onlyIsTablet ? 'left' : 'center')};
  ${(props) => props.onlyIsTablet && 'bottom: 50px;'}
  ${(props) =>
    props.onlyIsTablet && props.visibleBookmark && '  display: flex; align-items: center; justify-content: center;'}
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
  const [visibleBookmark, setVisibleBookMark] = useState(false);

  const { onlyIsTablet } = WindowSize();

  const visibleCategory = () => {
    if (visibleList) {
      setCloseSide(true);
      setVisibleList(false);
    } else {
      setVisibleList(true);
      setCloseSide(false);
      setVisibleBookMark(false);
    }
  };

  const visibleBookMark = () => {
    if (visibleBookmark) {
      setCloseSide(true);
      setVisibleBookMark(false);
    } else {
      setVisibleBookMark(true);
      setCloseSide(false);
      setVisibleList(false);
    }
  };

  const closeSideMenu = () => {
    setCloseSide(true);
    setVisibleBookMark(false);
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
        <span onClick={visibleBookMark} className="fav">
          <FontAwesomeIcon
            icon={faStar}
            style={{
              color: visibleBookmark ? 'gold' : 'white',
            }}
          />
        </span>
      </SideStyle>
      {!closeSide ? (
        <SideActiveStyle onlyIsTablet={onlyIsTablet} visibleBookmark={visibleBookmark}>
          <SideActiveCloseStyle onlyIsTablet={onlyIsTablet} onClick={closeSideMenu} />
          {visibleList && <CategoryList onClick={onClick}></CategoryList>}
          {visibleBookmark && <div style={{ color: '#fff' }}>리스트가 비어있습니다.</div>}
        </SideActiveStyle>
      ) : (
        <></>
      )}
    </SideWrap>
  );
};

export default SideMenu;
