//base
import React from 'react';

//hooks
import { WindowSize } from '../hooks/useResponsive';

//libs
import styled from 'styled-components';

//components
import { Category } from 'components';

const CategoryListBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.onlyIsTablet ? 'row' : 'column')};
  overflow-x: ${(props) => (props.onlyIsTablet ? 'scroll' : 'hidden')};
  overflow-y: ${(props) => (props.onlyIsTablet ? 'hidden' : 'scroll')};
  ::-webkit-scrollbar {
    display: none;
  }
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
  ${(props) => props.onlyIsTablet && `
    left: calc(100% - 53px);
    top: 17px;
    margin-top: 0;
    border: 2px solid #fff;
    font-weight: bold;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 15px;
    padding: 0;
  `}
`;

const CategoryList = ({ onClick }) => {
  const texts = [
    {
      id: 1,
      title: '아이유',
    },
    {
      id: 2,
      title: '아이유 크리스마스',
    },
    {
      id: 3,
      title: '디즈니',
    },
    {
      id: 4,
      title: '잔나비',
    },
    {
      id: 5,
      title: '10cm',
    },
    {
      id: 6,
      title: '아이즈원',
    },
  ];

  const { onlyIsTablet } = WindowSize();

  return (
    <>
      <CategoryListBlock onlyIsTablet={onlyIsTablet}>
        {texts.map((item) => (
          <Category keyword={item.title} key={item.id} onClick={onClick} />
        ))}
      </CategoryListBlock>
      <AddBtn onlyIsTablet={onlyIsTablet}>{onlyIsTablet?'+':'키워드 추가하기'}</AddBtn>
    </>
  );
};

export default CategoryList;
