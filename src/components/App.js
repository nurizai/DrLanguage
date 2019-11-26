import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Navigation from './Navigation'
import { getCards, patchCard, postCard, deleteCard } from '../utils/services'
import GlobalStyles from '../common/GlobalStyles';
import SettingsPage from './SettingsPage'
import BookmarksPage from './BookmarksPage';
import { Delete } from 'styled-icons/typicons/Delete'
import Map from './Map'

function App() {

  const [cards, setCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editContent, setEditContent] = useState({
    name: '',
    specialist: '',
    tags: '',
    address: '',
    location: '',
    phoneNumber: '',
    email: '',
    description: ''
  })

  // Change to longitude, latitude
  const [dataForMap, setDataForMap] = useState({
    latitude: 53.551086,
    longitude: 9.993682
  })

  useEffect(() => {
    // getCards().then(setCards)
    getCards().then(cards => setCards(cards))
  }, [])

  return (
    <Router>
      <AppStyled>
        <GlobalStyles />
        <EditModal show={showModal}>
          <DeleteBtn onClick={() => setShowModal(false)} />
          <div>
            <FormStyled onSubmit={editCard}>
              <input name="name" type="text" placeholder="Name" value={editContent.name} onChange={e => setEditContent({...editContent, name: e.target.value})} />
              <input name="specialist" type="text" placeholder="Fachbereich" value={editContent.specialist} onChange={e => setEditContent({...editContent, specialist: e.target.value})} />
              <input name="tags" type="text" placeholder="Sprachen" value={editContent.tags} onChange={e => setEditContent({...editContent, tags: e.target.value})} />
              <input name="address" type="text" placeholder="Straße und Hausnummer" value={editContent.address} onChange={e => setEditContent({...editContent, address: e.target.value})} />
              <input name="location" type="text" placeholder="Ort/PLZ" value={editContent.location} onChange={e => setEditContent({...editContent, location: e.target.value})} />
              <textarea name="description" placeholder="Beschreibung ändern" value={editContent.description} onChange={e => setEditContent({...editContent, description: e.target.value})} />
              <input name="phoneNumber" type="text" placeholder="Telefon" value={editContent.phoneNumber} onChange={e => setEditContent({...editContent, phoneNumber: e.target.value})} />
              <input name="email" type="text" placeholder="E-mail" value={editContent.email} onChange={e => setEditContent({...editContent, email: e.target.value})} />
              <button>Speichern</button>
            </FormStyled>
          </div>
        </EditModal>
        <Switch>
          <Route exact path="/" render={() => <Homepage cards={cards} onBookmarkClick={handleBookmarkClick} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} goToMap={goToMap} />} />
          <Route path="/bookmarked" render={() => <BookmarksPage onBookmarkClick={handleBookmarkClick} title="Favoriten" filteredCards={cards.filter(card => card.isBookmarked === true)} onEditClick={handleEditClick} goToMap={goToMap} onDeleteClick={handleDeleteClick}/>} />
          <Route path="/settings" render={() => <SettingsPage title="Ärzte hinzufügen" onSubmit={createCard} />} />
          <Route path="/map" render={() => <Map title="Karte" data={dataForMap} />} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )

  function goToMap(cardData) {
    setDataForMap({
      latitude: cardData.latitude,
      longitude: cardData.longitude
    })
  }


  function createCard(cardData) {
    postCard(cardData).then(card => {
      setCards([...cards, card])
    })
  }

  function editCard(e) {
    e.preventDefault()
    const id = editContent._id

    patchCard(id, {
      name: editContent.name,
      specialist: editContent.specialist,
      tags: editContent.tags.split(" ").map(tag => tag.toLowerCase()),
      description: editContent.description,
      address: editContent.address,
      location: editContent.location,
      phoneNumber: editContent.phoneNumber,
      email: editContent.email,
    })
      .then(updateCard => {
        const index = cards.findIndex(card => card._id === updateCard._id)
        setCards([
          ...cards.slice(0, index),
          {...updateCard},
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

  // TODO: For all keys, do the same like for description !!!
  function handleEditClick(card) {
    setEditContent({
      ...card,
      tags: card.tags.join(' '),
      description: card.description ? card.description : ''
    })
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
  background-color: #f5f5f5;
`

const FormStyled = styled.form`
  display: grid;
  grid-auto-rows: repeat(7, 1fr);
  padding: 20px;
  margin: auto;;
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
  z-index: 100000;
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
    margin: 10px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;

      &:hover {
        border: 1px solid #4882BB;
      }
    }

    textarea {
    margin: 10px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;

      &:hover {
        border: 1px solid #4882BB;
      }
    }

    button {
    margin: 10px;;
    border: none;
    border-radius: 3px;
    padding: 10px;
    background: #316ea9;
    color: white;
    font-size: 14px;
    cursor: pointer;
    }
  }
`

export default App;
