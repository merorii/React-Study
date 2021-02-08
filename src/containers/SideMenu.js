import React from 'react';

//lib
import styled from 'styled-components';

//conponents
import CategoryList from './CategoryList';

const SideStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.8);
  display: flex;
  justify-content: center;

`


const SideMenu = () => {
  return (
    <SideStyle>
      <CategoryList></CategoryList>
    </SideStyle>
  )
}

export default SideMenu;