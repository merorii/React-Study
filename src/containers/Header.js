import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import VideoList from './VideoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button';
// import Modal from '../components/Modal';

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
    const [isLogin, setIsLogin] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onPopup = () =>  setIsVisible(!isVisible);

    const offPopup = () => setIsVisible(false);
    return(
        <HeaderBlock>
            <NavBlock>
                <CategoryList></CategoryList>
                <div>
                    <Button color="transparent" text={isLogin ? "로그아웃" : "로그인"} onClick={onPopup}/>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {/* {isVisible && <Modal onClick={offPopup}/>} */}
            </NavBlock>
            <VideoList/>
        </HeaderBlock>
    );
}

export default Navi;