import React from 'react'
import styled from 'styled-components'

export default function Filter() {
  return (
    <FilterStyled>
      <FilterFirstAreaStyled>Filtern nach Spezialist</FilterFirstAreaStyled>
      <FilterSecondAreaStyled>Filtern nach Sprache</FilterSecondAreaStyled>
      <FilterThirdAreaStyled>Filtern nach Standort</FilterThirdAreaStyled>
    </FilterStyled>
  )
}

const FilterStyled = styled.div`
  display: grid;
  height: 42px;
  grid-template-columns: 1fr 1fr 1fr;
`

const FilterFirstAreaStyled = styled.div`
  display: grid;
  text-transform: uppercase;
  color: white;
  background-color: #4882BB;
  `
const FilterSecondAreaStyled = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: #316EA9;
  `
const FilterThirdAreaStyled = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: #21598F;
  `