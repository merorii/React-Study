//base
import React from 'react';

//libs
import styled from 'styled-components';

const CategoryBlock = styled.div`
  background: rgba(255, 255, 255, 0.3); //#eee
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  margin-right: 0.5rem;
  margin-bottom: 10px;
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  flex: none;
  width: fit-content;
  &:last-child {
    margin-right: 20px;
  }
`;

const Category = ({ keyword, onClick }) => {
  return <CategoryBlock onClick={() => onClick(keyword)}>{keyword}</CategoryBlock>;
};

export default Category;
