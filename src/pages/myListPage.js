import React from 'react';
import Header from '../containers/Header';
import Contents from '../containers/Contents';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SideMenu from '../containers/SideMenu';

const LayoutWrap = styled.div`
  display: flex;
`;
const LayoutImg = styled.div`
  background-image: url('${(props) => (props.bg ? props.bg : '#fff')}');
  background-repeat: no-repeat;
  background-size: 200%;
  background-position: center center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(12px);
  }
`;

const MyListPage = () => {
  const video = useSelector((state) => state.video);
  return (
    <LayoutWrap>
      <LayoutImg bg={video.backgroundBg} />
      <SideMenu />
      <Contents />
    </LayoutWrap>
  );
};

export default MyListPage;
