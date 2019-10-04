import React, { useState } from 'react';
import styled from 'styled-components/macro'
import Filter from './Filter'
import cardData from './cards.json'
import CardList from './CardList';
import Navigation from './Navigation'


function App() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(cardData)
  return (
    <AppStyled>
      <Filter filtertags={getFilterTags()} specialized={getSpecializedTags()} address={getAddressTags()}></Filter>
      <CardList/>
      <Navigation />
    </AppStyled>
  );


  function getFilterTags() {
    const filtertags = Array.from(cards.reduce((pre, acc) => {
      acc.tags.forEach(tag => pre.add(tag))
      return pre
    }, new Set()))
    return filtertags
  }


  function getSpecializedTags() {
    const specialized = Array.from(cards.reduce((pre, acc) => {
      pre.add(acc.specialized)
      return pre
    }, new Set()))
    return specialized
  }

  function getAddressTags() {
    const address = Array.from(cards.reduce((pre, acc) => {
      pre.add(acc.address)
      return pre
    }, new Set()))
    return address
  }

}



const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: white;
`

export default App;
