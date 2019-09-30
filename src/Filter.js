import React from 'react'
import styled from 'styled-components'

export default function Filter() {
  return (
    <StyledFilter>
      <StyledFilterArea>Filtern nach Spezialist</StyledFilterArea>
      <StyledFilterArea>Filtern nach Sprache</StyledFilterArea>
      <StyledFilterArea>Filtern nach Standort</StyledFilterArea>
    </StyledFilter>
  )
}

const StyledFilter = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  height: 40px;
  background-color: #4882BB;
`

const StyledFilterArea = styled.div`
  text-transform: uppercase;
  color: white;
  font-family: Helvetica, sans-serif;
`