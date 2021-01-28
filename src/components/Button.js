import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #c4302b;
    color:#fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius:0.5rem;
    & + & {
    margin-left: 1rem;
    }    
    &:hover{
        opacity:0.8
    }
`;

const Button = (props)=>{
    return(
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}

export default Button;