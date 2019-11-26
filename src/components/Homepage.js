import React, { useState } from 'react'
import FilterBar from './FilterBar'
import CardList from './CardList';
import styled from 'styled-components'

export default function Homepage({cards, onBookmarkClick, onDeleteClick, onEditClick, goToMap}) {

  // TODO: Pass filter to CardList where it is used to set filters
  // TODO: Set to array later in order to filter with multiple choices
  const [filter, setFilter] = useState({
    language: '',
    specialist: '',
    location: ''
  })

  function updateFilterOptions(key, value) {
    setFilter({
      ...filter,
      [key]: value
    })
  }

  return (
    <HomepageStyled>
      <FilterBar updateFilterOptions={(key, value) => updateFilterOptions(key, value)} />
      <CardList cards={cards} onBookmarkClick={onBookmarkClick} onDeleteClick={onDeleteClick} onEditClick={onEditClick} filter={filter} goToMap={goToMap} />
    </HomepageStyled>
  )

}

const HomepageStyled = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
`