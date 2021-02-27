//base
import React from 'react';

//libs
import Jump from 'react-reveal/Jump';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 10;
`;

const Wrapper = styled.ul`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ball = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom right, #a8edea 0%, #fed6e3 100%);
  margin: 2px;
`;
const Animation = () => {
  return (
    <LoadingWrapper>
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
    </LoadingWrapper>
  );
};

export default Animation;
