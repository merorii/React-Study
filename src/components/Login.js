import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Animation from './Animation';
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  form {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    border: 1.5px solid #fff;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    padding: 2.5em 5em;
    border-radius: 4px;
    align-items: center;
  }
  form input {
    padding: 0.8em 0.5em;
    margin-bottom: 1em;
    font-family: 'Dancing Script', cursive;
    border: 0;
    border-bottom: 1px solid white;
    outline: 0;
    /* border-radius: 4px; */
    font-size: 1rem;
    &:focus {
      outline: 1px solid pink;
    }
    background-color: transparent !important;
    :-internal-autofill-selected {
      background-color: transparent !important;
    }
  }
  form button {
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100px;
    padding: 0.8em;
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;
function Login() {
  const { register, handleSubmit, errors } = useForm();
  const handlerSubmit = (data) => console.log(data);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <input name="nickname" ref={register({ required: true })} placeholder="your id"/>
        {errors.nickname && <span>아이디를 입력해주세요.</span>}
        <input type="password" name="password" ref={register({ required: true })} placeholder="password"/>
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
        <button type="submit">Login</button>
      </form>

      <Animation/>
    </Wrapper>
  );
}

export default Login;
