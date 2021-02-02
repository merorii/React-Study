import React from 'react';
import styled, {css} from 'styled-components';

const CategoryBlock = styled.div`
    background: #eee;
    margin-right:0.5rem;
    height:3rem;
    line-height: 3rem;
    padding:0 1rem;
    border-radius: 0.5rem;
    cursor:pointer;
`;

const Category = (category)=>{
    const onClick=()=>{
        category.setCategory(category.text)
    }

    return(
        <CategoryBlock onClick={onClick}>
            {category.text}
        </CategoryBlock>
    )
}

export default Category;