//base
import React, { useState, useCallback } from 'react';

//hooks
import { WindowSize } from '../hooks/useResponsive';

//libs
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addListCategorySuccess } from '../reducers/user';

//components
import { Category } from 'components';

const CategoryListBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.onlyIsTablet ? 'row' : 'column')};
  overflow-x: ${(props) => (props.onlyIsTablet ? 'scroll' : 'hidden')};
  overflow-y: ${(props) => (props.onlyIsTablet ? 'hidden' : 'scroll')};
  ${(props) => props.onlyIsTablet && 'padding: 0 20px 0;'}
  margin-top: ${(props) => (props.onlyIsTablet ? '4vh' : '0')};
  max-height: 64vh;
  padding-left: ${(props) => (props.onlyIsTablet ? '' : '1rem')};
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AddCategoryBlock = styled.div`
  background: rgba(255,255,255,0.3);
  box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, .5);
  margin: ${(props) => props.onlyIsTablet ? '9vh 0 0 18%':'9vh 10px 0'};
  border-radius: 5px;
  padding: 3vh 0;
  position: fixed;
  text-align: center;
  width: 180px;
  ${(props) => props.onlyIsTablet ? 'top: 0;':'bottom: 2vh;'}
  ${(props) => props.onlyIsTablet && `
    width: 50%;
    padding: 3vh;
  `}
`;

const AddBtn = styled.div`
  text-align: center;
  line-height: 2rem;
  font-size: 0.89rem;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 3vh auto 0;
  width: fit-content;
  cursor: pointer;
  ${(props) => props.onlyIsTablet && `
    display: inline-block;
    border: 1px solid #222;
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin: 3vh 1vw 0;
    border-radius: 15px;
    padding: 0;
  `}
`;

const Palette = styled.span`
    display:inline-block;
    cursor: pointer;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 15px;
    margin: 0 3px;
`;

const colors = ['#c86b85', '#719192', '#2d4059', '#3c4245'];

const CategoryList = ({ onClick }) => {
  const texts = useSelector((state) => state.user.category);
  const [ newCategory, setNewCategory] = useState({
    text: '',
    color: '#c86b85'  
  });
  const { onlyIsTablet } = WindowSize();

  const dispatch = useDispatch();
  const selectColor = (color) =>{
    setNewCategory({...newCategory, color: color});
  }
  const onChange = (e) => {
    setNewCategory({...newCategory, text: e.target.value});
  }
  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      addCategoryEvent();
    }
  }
  const addCategoryEvent = ()=>{
    if(!newCategory.text){
      alert('키워드를 입력하세요');
      return;
    } 
    dispatch(addListCategorySuccess( newCategory ));
    setNewCategory({ text: '', color: '#c86b85' });
  }

  return (
    <>
      <CategoryListBlock onlyIsTablet={onlyIsTablet}>
        {texts.map((item) => (
          <Category keyword={item.title} key={item.id} onClick={onClick} />
        ))}
      </CategoryListBlock>
      <AddCategoryBlock onlyIsTablet={onlyIsTablet}>
        {colors.map((color, idx)=>
          <Palette style={{background:color}} onClick={()=>{selectColor(color)}} key={idx}></Palette>
        )}
        <input onChange={onChange} onKeyPress={onKeyPress} value={newCategory.text} style={{
          lineHeight: '1.5rem',
          background: 'none',
          border: 'none',
          borderBottom: '1px solid #666',
          marginTop: '2vh',
          width: '80%'
        }}></input>
        <AddBtn 
          onlyIsTablet={onlyIsTablet}
          onClick={addCategoryEvent}>
            {onlyIsTablet?'+':'키워드 추가하기'}
        </AddBtn>
      </AddCategoryBlock>
    </>
  );
};

export default CategoryList;
