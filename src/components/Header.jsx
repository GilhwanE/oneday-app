import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  font-size: 2em;
  margin-bottom: 20px;
  color: coral;
`;

const Header = () => {
  return (
    <>
      <Title>
        <div>
          <h1>오늘은 어땠나요?</h1>
        </div>
      </Title>
    </>
  );
};

export default Header;
