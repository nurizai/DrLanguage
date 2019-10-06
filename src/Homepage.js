import React from 'react'
import CardList from './CardList';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <HomepageStyled>
      <CardList />
    </HomepageStyled>
  )
}

const HomepageStyled = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`