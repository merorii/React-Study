//base
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

//lib
import styled from 'styled-components';

//store
import { loginRequestAction } from '../reducers/user'


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: auto;
    border: 1.5px solid #fff;
    margin: auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3em 2em 2.5em;
    border-radius: 4px;
    align-items: center;
    box-sizing: border-box;
  }

  form input {
    width: 80%;
    padding: 0.8em 0.5em;
    margin-bottom: 1em;
    font-family: 'Nanum Myeongjo', cursive;
    border: 0;
    border-bottom: 1px solid white;
    outline: 0;
    font-size: 1rem;

    background-color: transparent; 


    &:nth-child(2) {
      margin-bottom: 40px;
    }
    &:-internal-autofill-selected, &:focus, &:active {
      background: transparent !important;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-text-fill-color: rgba(0,0,0,.7) !important;
    }
 
  }

  form button {
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0.8em 0;
    font-family: 'Nanum Myeongjo', cursive;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
`;

function Login() {
  const { register, handleSubmit, errors } = useForm();
  let dispatch = useDispatch();
  const handlerSubmit = (data) => {
    dispatch(loginRequestAction(data));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <input name="nickname" ref={register({ required: true })} placeholder="your id" />
        {errors.nickname && <span>아이디를 입력해주세요.</span>}
        <input type="password" name="password" ref={register({ required: true })} placeholder="password" />
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
}

export default Login;
