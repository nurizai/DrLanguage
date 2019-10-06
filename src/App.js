import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Filter from './Filter'
import cardData from './cards.json'
import CardList from './CardList';
import Navigation from './Navigation'


function App() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(cardData)

  return (
    <Router>
      <AppStyled>
        <Switch>
          <Route exact path="/" render={() => <><Filter filtertags={getFilterTags()} specialized={getSpecializedTags()} address={getLocationTags()}></Filter><CardList/></>} />
          <Route path="/bookmarked" render={() => <><h1>Bookmarked</h1><p>Text here...</p></>} />
          <Route path="/settings" render={() => <><h1>Settings</h1><p>Text here...</p></>} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
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

  function getLocationTags() {
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
