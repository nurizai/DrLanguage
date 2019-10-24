import React from 'react'
import styled from 'styled-components'

export default function Tag({ tags, handleOnClick }) {
  return (
    tags === 'alle' ? <TagStyled data-filter='option' data-value='' onClick={handleOnClick} key={tags}>{tags}</TagStyled>
    : tags.map(tag => <TagStyled data-filter='option' data-value={tag} onClick={handleOnClick} key={tag}>{tag}</TagStyled>)
  )
}

const TagStyled = styled.div`
  display: inline-block;
  font-size: 10px;
  padding: 9px;
  background: #316ea9d9;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 5px 5px 0 0;
  cursor: pointer;
`