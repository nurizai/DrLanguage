import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag';

export default function Filter({ filtertags, test }) {
  return (
    <FilterStyled>
      <FilterButtons filtertags={filtertags} test={test}></FilterButtons>
    </FilterStyled>
  )
}

function FilterButtons({
  filtertags,
  test,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <FilterFirstAreaStyled onClick={() => toggleCollapsed()}>Filter nach Sprache</FilterFirstAreaStyled>
      <FilterSecondAreaStyled onClick={() => toggleCollapsed()}>Filter nach Spezialist</FilterSecondAreaStyled>
      <FilterThirdAreaStyled>Filter nach Standort</FilterThirdAreaStyled>
      {collapsed && <Popup>{filtertags.map(tag => <Tag text={tag} />)}</Popup>}
      {collapsed && <Popup>{test.map(tag => <Tag text={tag} />)}</Popup>}
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