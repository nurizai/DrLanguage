import React from 'react';
import Header from './Header'
import styled from 'styled-components'
import StyledFilter from './Filter'

function App() {
  return (
    <AppStyled>
      <Header></Header>
      <StyledFilter></StyledFilter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #EDF0F5;
`

export default App;
