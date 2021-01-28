import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

const ContentsBlock = styled.main`
    padding-top: 8rem;
    width:100%;
    height: 100vh;
`;

const Video = styled.div`
    width: 80rem;
    height: 45rem;
    background: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const ButtonBlock = styled.section`
    width: 80rem;
    margin: 1rem auto;
`;

const Main = ()=>{
    return(
        <ContentsBlock>
            <Video>영상</Video>
            <ButtonBlock>
                <Button text="담기" icons="faBars"/>
                <Button text="즐겨찾기" icons="faBars"/>
            </ButtonBlock>
        </ContentsBlock>
    );
}

export default Main;