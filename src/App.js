import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Navigation from './Navigation'
import { getCards, patchCard, postCard, deleteCard } from './services'
import GlobalStyles from './GlobalStyles';
import SettingsPage from './SettingsPage'
import BookmarksPage from './BookmarksPage';
import { Delete } from 'styled-icons/typicons/Delete'

function App() {

  const [cards, setCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editContent, setEditContent] = useState({
    name: ''
  })

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  return (
    <Router>
      <AppStyled>
        <GlobalStyles />
        <EditModal show={showModal}>
          <DeleteBtn onClick={() => setShowModal(false)} />
          <div>
            <form onSubmit={editCard}>
              <input name="name" type="text" placeholder="Name" value={editContent.name} onChange={e => setEditContent({...editContent, name: e.target.value})} />
              <button>Edit</button>
            </form>
          </div>
        </EditModal>
        <Switch>
          <Route exact path="/" render={() => <Homepage cards={cards} onBookmarkClick={handleBookmarkClick} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} />} />
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

  function editCard(e) {
    e.preventDefault()
    const id = editContent._id

    patchCard(id, { name: editContent.name })
      .then(updateCard => {
        const index = cards.findIndex(card => card._id === updateCard._id)
        setCards([
          ...cards.slice(0, index),
          {...updateCard, name: updateCard.name},
          ...cards.slice(index + 1)
        ])
      })

      .then(setShowModal(false))
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
    deleteCard(id).then(getCards().then(setCards))
  }

  function handleEditClick(card) {
    setEditContent(card)
    setShowModal(true)
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

const DeleteBtn = styled(Delete)`
  position: absolute;
  top: 35px;
  right: 25px;
  height: 30px;
  width: 30px;
`

const EditModal = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  background: #00000080;
  width: 100vw;
  height: 100vh;

  div {
    margin: 30px auto;
    background: white;
    padding: 50px 20px 20px 20px;
    border-radius: 5px;
    width: 90vw;
    height: 90vh;

    input {
      width: 100%;
      padding: 10px;
    }
  }
`

export default App;
