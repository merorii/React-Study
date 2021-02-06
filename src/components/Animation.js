import React from 'react';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade'
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  position: absolute;
  top: 56%;
  right: 43%;
`

const Ball = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .5);
  margin: 2px;
`
function Animation() {
  return (
    <Wrapper>
      <Jump forever={true}>
        <Ball />
      </Jump>
      <Jump forever={true} delay={150}>
        <Ball />
      </Jump>
      <Jump forever={true} delay={250}>
        <Ball />
      </Jump>
      </Wrapper>
  )
}

export default Animation
