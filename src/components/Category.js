import React from 'react';
import styled from 'styled-components';

const CategoryBlock = styled.div`
    background: #eee;
    margin-right:0.5rem;
    height:3rem;
    line-height: 3rem;
    padding:0 1rem;
    border-radius: 0.5rem;
`;

const Category = (props)=>{
    return(
        <CategoryBlock>
            {props.text}
        </CategoryBlock>
    )
}

export default Category;