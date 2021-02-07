import React, { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${props => props.color === undefined ? '#c4302b' : props.color};
    color:${props => props.color === undefined ? '#fff' : 'black'};
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius:0.5rem;
    cursor: pointer;
    & + & {
    margin-left: 1rem;
    }    
    &:hover{
        opacity:0.8
    }
`;
// const Wrapper = styled.div`
//     background: ${props => props.color === undefined ? '#c4302b' : props.color};
//     color:${props => props.color === undefined ? '#fff' : 'black'};
//     display: inline-block;
//     padding: 0.5rem 1rem;
//     border-radius:0.5rem;
//     cursor: pointer;
//     & + & {
//     margin-left: 1rem;
//     }    
//     &:hover{
//         opacity:0.8
//     }
// `;

const Button = ({ text, color, onClick, children }) => {
    const handlerClick = () => {
        onClick();
    }
    return (
        <Wrapper color={color} onClick={handlerClick}>
            { children}
        </Wrapper>
    )
}

export default Button;