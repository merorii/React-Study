//base
import React from 'react';
import { useSelector } from 'react-redux';

//hooks
import { WindowSize } from 'hooks';

//libs
import styled from 'styled-components';

//components
import { Contents, SideMenu } from 'containers';

const LayoutWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.onlyIsTablet ? 'column-reverse' : 'row')};
  overflow: hidden;
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
  filter: blur(13px);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const MyListPage = () => {
  const video = useSelector((state) => state.video);
  const { onlyIsTablet } = WindowSize();

  return (
    <LayoutWrap onlyIsTablet={onlyIsTablet}>
      <LayoutImg bg={video.backgroundBg} />
      <SideMenu />
      <Contents />
    </LayoutWrap>
  );
};

export default MyListPage;
