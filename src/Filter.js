import React, { useState } from 'react'
import styled from 'styled-components'
import FilterTags from './FilterTags'
import Tag from './Tag';

export default function Filter({ filtertags }) {
  return (
    <FilterStyled>
      <FilterButtons filtertags={filtertags}></FilterButtons>
    </FilterStyled>
  )
}

function FilterButtons({
  filtertags,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <FilterFirstAreaStyled onClick={() => toggleCollapsed()}>Filter nach Sprache</FilterFirstAreaStyled>
      <FilterSecondAreaStyled>Filter nach Spezialist</FilterSecondAreaStyled>
      <FilterThirdAreaStyled>Filter nach Standort</FilterThirdAreaStyled>
      {collapsed && <Popup>{filtertags.map(tag => <Tag text={tag} />)}</Popup>}
    </>
  )
}

const Popup = styled.div`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  width: 100vw;
  height: minmax(25vh);
  background-color: #4882BB;
  top: 72px;
  z-index: 1000;
  border-radius: 0 0 10px 10px;
`

const FilterStyled = styled.div`
  display: grid;
  height: 42px;
  grid-template-columns: 1fr 1fr 1fr;
`

const FilterFirstAreaStyled = styled.div`
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