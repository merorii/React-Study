import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import ReactPlayer from 'react-player';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// library.add(faBars);

const ContentsBlock = styled.main`
    padding-top: 8rem;
    width:100%;
    height: 100vh;
`;

const Video = styled.div`
    width: 80vw;
    height: 70vh;
    background: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const ButtonBlock = styled.section`
    width: 80vw;
    margin: 1rem auto;
`;

const Main = ()=>{
    const {상태} = useSelector(리듀서이름);

    const videoUrl = "https://www.youtube.com/watch?v="+상태;

    return(
        <ContentsBlock>
            <Video>
                <ReactPlayer
                url={videoUrl} playing controls/>
            </Video>
            <ButtonBlock>
                <Button text="즐겨찾기"/>
            </ButtonBlock>
        </ContentsBlock>
    );
}

export default Main;