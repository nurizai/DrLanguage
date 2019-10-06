import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Tag from './Tag';

export default function Filter({ filtertags, specialized, address }) {
  const [selectedFilter, setSelectedFilter] = useState('')
  const [filterData, setFilterData] = useState()
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    selectedFilter === ''
      ? setCollapsed(false)
      : setCollapsed(true)
  }, [selectedFilter])

  function toggleFilter(filter, data) {
   // console.log(data)
    filter === selectedFilter
      ? setSelectedFilter('')
      : (setSelectedFilter(filter) || setFilterData(data))
  }

  return (
    <FilterStyled>
      <FilterButtonLanguage filtertags={filtertags} onClick={toggleFilter} ></FilterButtonLanguage>
      <FilterButtonSpecialized specialized={specialized} onClick={toggleFilter}></FilterButtonSpecialized>
      <FilterButtonAddress address={address} onClick={toggleFilter}></FilterButtonAddress>
      {collapsed && <Popup><Tag key='all' text='Alle' /> {filterData}</Popup>}
    </FilterStyled>
  )
}

function FilterButtonSpecialized({
  specialized,
  onClick,
}) {

  // console.log(specialized)

  return (
    <>
      <FilterSecondAreaStyled onClick={() => onClick('specialized', specialized.map(tag => <Tag key={tag} text={tag} />))}>Filter nach Spezialist</FilterSecondAreaStyled>
    </>
  )
}

function FilterButtonLanguage({
  filtertags,
  onClick,
}) {

  return (
    <>
      <FilterFirstAreaStyled onClick={() => onClick('language', filtertags.map(tag => <Tag key={tag} text={tag} />))}>Filter nach Sprache</FilterFirstAreaStyled>
    </>
  )
}

function FilterButtonAddress({
  address,
  onClick,
}) {

  return (
    <>
      <FilterThirdAreaStyled onClick={() => onClick('address', address.map(tag => <Tag key={tag} text={tag} />))}>Filter nach Standort</FilterThirdAreaStyled>
    </>
  )
}

const Popup = styled.div`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  width: 100vw;
  background-color: rgba(131,144,159,0.7);
  top: 48px;
  z-index: 1000;
  border-radius: 0 0 5px 5px;
`

const FilterStyled = styled.div`
  text-align: center;
  display: grid;
  font-size: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr;
`

const FilterFirstAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #4882BB;
  cursor: pointer;
  `
const FilterSecondAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #316EA9;
  cursor: pointer;
  `
const FilterThirdAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #21598F;
  cursor: pointer;
  `