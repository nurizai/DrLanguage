import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag';

export default function Filter({ filtertags }) {
  return (
    <FilterStyled>
      <FilterButtonLanguage filtertags={filtertags} ></FilterButtonLanguage>
    </FilterStyled>
  )
}

function FilterButtonLanguage({
  filtertags,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <FilterFirstAreaStyled onClick={() => toggleCollapsed()}>Filter nach Sprache</FilterFirstAreaStyled>
      {collapsed && <LanguagePopup>{filtertags.map(tag => <Tag text={tag} />)}</LanguagePopup>}
    </>
  )
}

const LanguagePopup = styled.div`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  width: 100vw;
  height: minmax(25vh);
  background-color: #4882BB;
  top: 60px;
  z-index: 1000;
  border-radius: 0 0 5px 5px;
`

const FilterStyled = styled.div`
  display: grid;
  font-size: 0.8rem;
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