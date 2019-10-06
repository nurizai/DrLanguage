import React, { useState } from 'react'
import Cards from './Cards'
import cardData from './cards.json'
import styled from 'styled-components'

export default function CardList() {
// eslint-disable-next-line
  const [cards, setCards] = useState(cardData)

  return (
    <CardListStyled>
      {cards.map((card, index) => (
        <Cards
        key={index}
        {...card}
        />
  ))}
    </CardListStyled>
  )
}

const CardListStyled = styled.section`
  padding: 48px 0;
`
