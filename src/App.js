import React, { useState } from 'react';
import Header from './Header'
import styled from 'styled-components/macro'
import Filter from './Filter'
import cardData from './cards.json'
import CardList from './CardList';


function App() {
  const [cards, setCards] = useState(cardData)
  return (
    <AppStyled>
      <Header/>
      <Filter filtertags={getFilterTags()}></Filter>
      <CardList/>
    </AppStyled>
  );


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
  grid-template-rows: 24px 36px auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #EDF0F5;
`

export default App;
