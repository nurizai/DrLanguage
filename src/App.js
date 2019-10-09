import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Navigation from './Navigation'
import { getCards, patchCard, postCard } from './services'
import GlobalStyles from './GlobalStyles';
import CardList from './CardList';
import SettingsPage from './SettingsPage'
import BookmarksPage from './BookmarksPage';

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  return (
    <Router>
      <AppStyled>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" render={() => <Homepage cards={cards} onBookmarkClick={handleBookmarkClick} />} />
          <Route path="/bookmarked" render={() => <BookmarksPage title="Bookmarks" />} />
          <Route path="/settings" render={() => <SettingsPage title="Settings" onSubmit={createCard} />} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )

  function withCardPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp ? cards.filter(card => card[filterProp]) : cards
      return <CardList title={title} cards={filteredCards} onBookmarkClick={handleBookmarkClick} />
    }
  }

  function createCard(cardData) {
    postCard(cardData).then(card => {
      setCards([...cards, card])
    })
  }

  function handleBookmarkClick(card) {
    patchCard(card._id, { isBookmarked: !card.isBookmarked }).then(updateCard => {
      const index = cards.findIndex(card => card._id === updateCard._id)
      setCards([
        ...cards.slice(0, index),
        {...card, isBookmarked: updateCard.isBookmarked },
        ...cards.slice(index + 1),
      ])
    })
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
