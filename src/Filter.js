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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4882BB;
`

const StyledFilterArea = styled.div`
  text-transform: uppercase;
  color: white;
  font-family: Helvetica, sans-serif;
`