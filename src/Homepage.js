import React, { useState } from 'react'
import FilterBar from './FilterBar'
import CardList from './CardList';
import styled from 'styled-components'

export default function Homepage() {
  const [filter, setFilter] = useState({
    language: 'all',
    specialist: 'all',
    location: 'all'
  })

  console.log(filter)

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