import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Navigation from './Navigation'
import { getCards, patchCard, postCard, deleteCard } from './services'
import GlobalStyles from './GlobalStyles';
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
          <Route exact path="/" render={() => <Homepage cards={cards} onBookmarkClick={handleBookmarkClick} onDeleteClick={handleDeleteClick} />} />
          <Route path="/bookmarked" render={() => <BookmarksPage onBookmarkClick={handleBookmarkClick} title="Bookmarks" filteredCards={cards.filter(card => card.isBookmarked === true)}  />} />
          <Route path="/settings" render={() => <SettingsPage title="Settings" onSubmit={createCard} />} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )


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

  function handleDeleteClick(card) {
    const id = card._id
    deleteCard(id)
      .then(getCards().then(setCards))
  }

}


const AppStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #ebebeb;
`

export default App;
