import React, { useState } from 'react';
import Header from './Header'
import styled from 'styled-components'
import FilterStyled from './Filter'
import Cards from './Cards'
import cardData from './cards.json'

function App() {
  const [cards, setCards] = useState(cardData)
  return (
    <>
      <Header></Header>
      <FilterStyled></FilterStyled>
      <AppStyled>
        {renderCards()}
      </AppStyled>
    </>
  );

  function renderCards() {
    return cards.map((card, index) => (
      <Cards
        key={index}
        {...card}
        />
    ))
  }
}

const AppStyled = styled.div`
  display: grid;
  gap: 10px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #EDF0F5;
`

export default App;
