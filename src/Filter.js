import React from 'react'
import styled from 'styled-components'

export default function Filter() {
  return (
    <FilterStyled>
      <FilterAreaStyled>Filtern nach Spezialist</FilterAreaStyled>
      <FilterAreaStyled>Filtern nach Sprache</FilterAreaStyled>
      <FilterAreaStyled>Filtern nach Standort</FilterAreaStyled>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4882BB;
`

const FilterAreaStyled = styled.div`
  text-transform: uppercase;
  color: white;
  font-family: Helvetica, sans-serif;
`