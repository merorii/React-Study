import React, {useState} from 'react';
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

const FullMenu = styled.nav`
    width:100%;
    height: 100%;  
    background:rgba(0,0,0,0.6);
    position:fixed;
    top:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:10000;
`;

const Navi = (props)=>{
    const [category, setCategory] = useState('');
    return(
        <HeaderBlock>
            <NavBlock>
                {console.log("keyword:: "+category)}
                <CategoryList setCategory={setCategory}/>
                <div>메뉴</div>
                {/* <FontAwesomeIcon icon={faBars} /> */}
            </NavBlock>
            {category && <VideoList category={category} setVideoId={props.setVideoId}/>}
            {/* <FullMenu>
                <CategoryList setCategory={setCategory}/>
            </FullMenu> */}
        </HeaderBlock>
    );
}

export default Navi;