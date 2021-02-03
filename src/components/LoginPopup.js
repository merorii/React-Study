import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 10%;
  form {
    display: flex;
    flex-direction: column;
    padding: 2.5em 5em;
    background: rgba(255, 255, 255, .7);
    border-radius: 4px;
    align-items: center;
  }
  form input {
    padding: .8em .5em;
    margin-bottom: 1em;
    border: 0;
    outline: 0;
    border-radius: 4px;
    font-size: 1rem;
    &:focus{
      border: 1px solid pink;
    }
  }
  form button {
    background-color: pink;
    border: 0;
    outline: 0;
    width: 100px;
    padding: .8em;
  }
`
function LoginPopup() {
  const { register, handleSubmit, errors } = useForm();
  const handlerSubmit = data => console.log(data);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <input name="nickname" ref={register({required: true})} />
        {errors.nickname && <span>아이디를 입력해주세요.</span>}
        <input type="password" name="password" ref={register({required: true})} />
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
        <button type="submit">로그인</button>
      </form>
    </Wrapper>
  )
}

export default LoginPopup;
