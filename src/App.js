import React from 'react';
import Header from './Header'
import styled from 'styled-components'
import FilterStyled from './Filter'
import Cards from './Cards'
import cardData from './cards.json'

function App() {
  return (
    <AppStyled>
      <Header></Header>
      <FilterStyled></FilterStyled>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
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
