import React from 'react'
import Cards from './Cards'
import styled from 'styled-components/macro'

export default function CardList({ cards, onBookmarkClick, onDeleteClick, onEditClick, filter, goToMap }) {
// eslint-disable-next-line
  //const [cards, setCards] = useState(cardData)

  const language = filter.language
  const specialist = filter.specialist
  const location = filter.location

  // includes gibt true oder false zurück, aber wegen Filter bedeutet das, dass er die Karten zurückgibt, wo die Kondition true ist
  const filteredCards = cards.filter(card => {

    let result = card

    // Nothing is set
    if (!language && !specialist && !location) {
      result = card
    }

    // only LANGUAGE tag is set
    if (language && !specialist && !location) {
      result = card.tags.includes(language)
    }

    // only SPECIALIST is set
    if (!language && specialist && !location) {
      result = card.specialist === specialist
    }

    // only LOCATION is set
    if (!language && !specialist && location) {
      result = card.location.includes(location)
    }

    // only LANGUAGE & SPECIALIST is set, but LOCATION is not
    if (language && specialist && !location) {
      result = card.tags.includes(language) && card.specialist === specialist
    }

    // only LANGUAGE & LOCATION is set, but SPECIALIST is not
    if (language && !specialist && location) {
      result = card.tags.includes(language) && card.location.includes(location)
    }

    // only SPECIALIST & LOCATION is set, but LANGUAGE is not
    if (!language && specialist && location) {
      result = card.specialist === specialist && card.location.includes(location)
    }

    // All 3 are set
    if (language && specialist && location) {
      result = card.tags.includes(language) && card.specialist === specialist && card.location.includes(location)
    }

    return result
  })

  return (
    <CardListStyled>
    {filteredCards.map(card => (
          <Cards key={card._id} {...card} onBookmarkClick={() => onBookmarkClick(card)} onDeleteClick={() => onDeleteClick(card)} onEditClick={() => onEditClick(card)} goToMap={() => goToMap(card)} />
        ))}
    </CardListStyled>
  )
}

const CardListStyled = styled.section`
  padding: 48px 0;
`
