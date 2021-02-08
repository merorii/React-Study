import React from 'react';
import styled from 'styled-components';
import useAxios from '../hooks/useAxios';

const CategoryBlock = styled.div`
    background: rgba(255, 255, 255, .3); //#eee
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
    margin-right:0.5rem;
    margin-bottom: 10px;
    height:3rem;
    line-height: 3rem;
    padding:0 1rem;
    border-radius: 0.5rem;
    cursor:pointer;
    font-weight: 500;
`;

const Category = ({ keyword }) => {

    const { state: videos, error, changeKeyword } = useAxios(keyword);
    const onClick = () => {
        changeKeyword(keyword);
    }
    if (error) {
        console.log(error);
        return;
    }
    return (
        <CategoryBlock onClick={onClick}>
            {keyword}
        </CategoryBlock>
    );
}

export default Category;