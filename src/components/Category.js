import React from 'react';
import styled from 'styled-components';
import useAxios from '../hooks/useAxios';

const CategoryBlock = styled.div`
    background: #eee;
    margin-right:0.5rem;
    height:3rem;
    line-height: 3rem;
    padding:0 1rem;
    border-radius: 0.5rem;
    cursor:pointer;
`;

const Category = ({keyword})=>{

    const {state:videos, error, changeKeyword} = useAxios(keyword);
    const onClick = ()=>{
        changeKeyword(keyword);
    }
    if(error){
        console.log(error);
        return;
    }
    return(
        <CategoryBlock onClick={onClick}>
            {keyword}
        </CategoryBlock>
    );
}

export default Category;