import React from 'react'
import FilterBar from './FilterBar'
import CardList from './CardList';
import styled from 'styled-components'

export default function Homepage() {
  return (
    <HomepageStyled>
      <FilterBar />
      <CardList />
    </HomepageStyled>
  )
}

const HomepageStyled = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
`