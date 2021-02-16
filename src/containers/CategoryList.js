import React, { useEffect } from 'react';
import styled from 'styled-components';

//hooks
import { WindowSize } from '../hooks/useResponsive';
import useAxios from '../hooks/useAxios';

import Category from '../components/Category';

const CategoryListBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.onlyIsTablet ? 'row' : 'column')};
  overflow-y: ${(props) => (props.onlyIsTablet ? 'hidden' : 'scroll')};
  overflow-x: scroll;
  ${(props) => props.onlyIsTablet && 'padding: 0 20px 0;'}
  margin-top: ${(props) => (props.onlyIsTablet ? '4vh' : '0')};
  max-height: 80vh;
  padding-left: ${(props) => (props.onlyIsTablet ? '' : '1rem')};
`;

const AddBtn = styled.div`
  text-align: center;
  line-height: 2rem;
  font-size: 0.89rem;
  border: 1px solid #fff;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 3vh;
  width: fit-content;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  ${(props) => props.onlyIsTablet || 'bottom: 40px;'}
`;

const CategoryList = ({ onClick }) => {
  const texts = [
    {
      id: 1,
      title: '아이유 크리스마스',
    },
    {
      id: 2,
      title: '디즈니',
    },
    {
      id: 3,
      title: '잔나비',
    },
    {
      id: 4,
      title: '10cm',
    },
    {
      id: 5,
      title: '아이즈원',
    },
  ];

  const { onlyIsPc, onlyIsTablet, onlyIsMobile } = WindowSize();

  //   useEffect(() => {
  //     changeKeyword(texts[0].title);
  //     console.log(texts[0].title);
  //   }, []);

  //   const onClick = (keyword) => {
  //     changeKeyword(keyword);
  //   };
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }

  return (
    <>
      <CategoryListBlock onlyIsTablet={onlyIsTablet}>
        {texts.map((item) => (
          <Category keyword={item.title} key={item.id} onClick={onClick} />
        ))}
      </CategoryListBlock>
      <AddBtn onlyIsTablet={onlyIsTablet}>키워드 추가하기</AddBtn>
    </>
  );
};

export default CategoryList;
