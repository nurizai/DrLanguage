import React, { useState } from 'react'
import Cards from './Cards'
import cardData from './cards.json'
import styled from 'styled-components'

export default function CardList() {

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
  overflow-y: scroll;
`