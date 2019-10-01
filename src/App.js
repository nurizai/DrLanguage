import React, { useState } from 'react';
import Header from './Header'
import styled from 'styled-components'
import Filter from './Filter'
import Cards from './Cards'
import cardData from './cards.json'

function App() {
  const [cards, setCards] = useState(cardData)
  return (
    <>
      <Header></Header>
      <Filter filtertags={getFilterTags()}></Filter>
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

  function getFilterTags() {
    const filtertags = Array.from(cards.reduce((pre, acc) => {
      acc.tags.forEach(tag => pre.add(tag))
      return pre
    }, new Set()))
    return filtertags
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
