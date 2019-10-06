import React from 'react'
import styled from 'styled-components'

export default function Tag({ tags, handleOnClick }) {
  return (
    tags === 'Alle' ? <TagStyled data-filter='option' onClick={handleOnClick} key={tags}>{tags}</TagStyled> : tags.map(tag => <TagStyled data-filter='option' onClick={handleOnClick} key={tag}>{tag}</TagStyled>)
  )
}

const TagStyled = styled.div`
  display: inline-block;
  font-family: Helvetica;
  font-size: 0.6rem;
  padding: 10px;
  background: #316ea9;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 5px 5px 0 0;
  cursor: pointer;
`