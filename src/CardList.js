import React from 'react'
import Cards from './Cards'
import styled from 'styled-components/macro'

export default function CardList({ cards, onBookmarkClick }) {
// eslint-disable-next-line
  //const [cards, setCards] = useState(cardData)

  return (
    <CardListStyled>
    {cards.map(card => (
          <Cards key={card._id} {...card} onBookmarkClick={() => onBookmarkClick(card)} />
        ))}

    </CardListStyled>
  )
}

const CardListStyled = styled.section`
  padding: 48px 0;
`
