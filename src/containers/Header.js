import React from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import VideoList from './VideoList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderBlock = styled.header`
    position: fixed;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
`;

const NavBlock = styled.nav`
    height: 5rem;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

const Navi = ()=>{
    return(
        <HeaderBlock>
            <NavBlock>
                <CategoryList/>
                <div>메뉴</div>{/* <FontAwesomeIcon icon={faBars} /> */}
            </NavBlock>
            {/* <VideoList/> */}
        </HeaderBlock>
    );
}

export default Navi;