import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Filter from './Filter'
import cardData from './cards.json'
import Navigation from './Navigation'


function App() {
  // eslint-disable-next-line
  const [cards, setCards] = useState(cardData)

  return (
    <Router>
      <AppStyled>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/bookmarked" render={() => <h1>Bookmarked</h1>} />
          <Route path="/settings" render={() => <h1>Settings</h1>} />
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: white;
`

export default App;
