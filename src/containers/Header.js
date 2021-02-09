import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import SideMenu from './SideMenu';
import VideoList from './VideoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';

import Login from '../components/Login';

const HeaderBlock = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`;

const NavBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  align-items: center;
`;


// const ButtonBlock = styled.section`
//   width: 80vw;
//   margin: 1rem auto;
// `;
const MenuBlock = styled.div`
  position: relative;
  left:1rem;
  z-index: 1;
  cursor : pointer;
`;
const ButtonBlock = styled.div`
position: relative;
right: 1rem;
z-index: 1;
cursor : pointer;
`;

const Navi = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const activeSideMenu = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  return (
    <HeaderBlock>
      <NavBlock>
        <MenuBlock>
          {/* <Button color="transparent" text={isLogin ? '로그아웃' : '로그인'} /> */}
          <FontAwesomeIcon icon={faBars} onClick={activeSideMenu} />
          <CategoryList></CategoryList>
        </MenuBlock>
        <ButtonBlock>
          <Button> <FontAwesomeIcon icon={faBookmark} /></Button>
        </ButtonBlock>
      </NavBlock>
      {isVisible && <SideMenu />}
    </HeaderBlock>
  );
};

export default Navi;
