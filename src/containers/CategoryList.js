import React from 'react';
import styled from 'styled-components';
import Category from '../components/Category';

const CategoryListBlock = styled.div`
    display: flex;
    align-items: center;
`;

const AddBtn = styled.div`
    background: #eee;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    text-align: center;
    line-height: 2rem;
`;

const CategoryList = ()=>{

    // const texts = [
    //     {
    //         id:1,
    //         name: '카테고리1'
    //     },
    //     {
    //         id:2,
    //         name: '카테고리2'
    //     },
    //     {
    //         id:3,
    //         name: '카테고리3'
    //     }
    // ];
    const texts = ['카테고리1', '카테고리2', '카테고리3'];

    return(
        <CategoryListBlock>
            {texts.map(item=>{
                <Category text={item}/>
            })}
            <Category text='카테고리1'/>
            <Category text='카테고리2'/>
            <Category text='카테고리3'/>
            <AddBtn>+</AddBtn>
        </CategoryListBlock>
    )
}

export default CategoryList;