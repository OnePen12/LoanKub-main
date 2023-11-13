import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MultiStepForm from './components/MultiStepForm';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledContainer = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <div>
          <MultiStepForm />
        </div>
      </StyledContainer>
    </>
  );
};

export default App;
