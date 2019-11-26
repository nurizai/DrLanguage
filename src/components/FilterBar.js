import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import { getCards } from '../utils/services'

export default function FilterBar({ updateFilterOptions }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)
  }, [])

  const [popupCollapsed, setPopupCollapsed] = useState(false)
  const [popupTags, setPopupTags] = useState([])
  const [filterKey, setFilterKey] = useState('')
  const [currentFilter, setCurrentFilter] = useState({
    language: '',
    specialist: '',
    location: ''
  })

  window.addEventListener('click', e => {
    e.target.classList.contains('js-open-filter') || setPopupCollapsed(false)
  })

  const currentLanguage = currentFilter.language
  const currentSpecialist = currentFilter.specialist
  const currentLocation = currentFilter.location

  return (
    <FilterBarStyled>
      <FilterAreaStyled className='js-open-filter' onClick={() => handleFilterAreaClick('language')}>{renderFilterArea('language', currentLanguage)}</FilterAreaStyled>
      <FilterAreaStyled className='js-open-filter' onClick={() => handleFilterAreaClick('specialist')}>{renderFilterArea('specialist', currentSpecialist)}</FilterAreaStyled>
      <FilterAreaStyled className='js-open-filter' onClick={() => handleFilterAreaClick('location')}>{renderFilterArea('location', currentLocation)}</FilterAreaStyled>
      {popupCollapsed &&
      <Popup>
        <Tag handleOnClick={(e) => handleTagClick(e)} key='all' tags='alle' />
        <Tag handleOnClick={(e) => handleTagClick(e)} tags={popupTags} />
      </Popup>}
    </FilterBarStyled>
  )

  function renderFilterArea(type, value) {
    const currentType = () => {
      if (type === 'language') { return 'Sprache' }
      if (type === 'specialist') { return 'Spezialist' }
      if (type === 'location') { return 'Standort' }
    }

    return (
      <>
        <span className='js-open-filter'>{value ? 'Gefiltert nach' : 'Filtern nach'}</span>
        <span className='js-open-filter'>{value ? value : currentType()}</span>
      </>
    )
  }

  function handleFilterAreaClick(type) {
    setFilterKey(type)
    openPopup(type)
  }

  function handleTagClick(e) {
    updateFilterOptions(filterKey, e.target.dataset.value)
    setPopupCollapsed(false)

    setCurrentFilter({
      ...currentFilter,
      [filterKey]: e.target.dataset.value
    })

  }

  function openPopup(filterType) {

    // Create a set with the tags displayed in the popup depending on which FilterArea is clicked
    // Set makes sure that elements are only included once
    const currentPopupTags = Array.from(cards.reduce((pre, acc) => {

      if (filterType === 'language') {
        acc.tags.forEach(tag => pre.add(tag))
      }

      if (filterType === 'specialist') {
        pre.add(acc.specialist)
      }

      if (filterType === 'location') {
        const zipCodeEndsHere = 6
        pre.add(acc.location.slice(zipCodeEndsHere))
      }

      return pre
    }, new Set()))

    setPopupCollapsed(true)
    return setPopupTags(currentPopupTags)
  }

}

const FilterBarStyled = styled.header`
  position: fixed;
  width: 100vw;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  z-index: 500;
`

const FilterAreaStyled = styled.button`
  border: none;
  height: 48px;
  text-transform: uppercase;
  color: white;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  span:nth-child(1) {
    display: block;
    font-weight: normal;
    font-size: 11px;
  }

  :nth-child(1) {
    background-color: #4882BB;
  }

  :nth-child(2) {
    background-color: #316EA9;
  }

  :nth-child(3) {
    background-color: #21598F;
  }
`

const Popup = styled.div`
  padding: 10px;
  position: absolute;
  width: 100vw;
  background-color: #fffc;
  top: 48px;
  z-index: 1000;
  border-radius: 0 0 5px 5px;
`