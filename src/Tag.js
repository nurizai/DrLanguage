import React from 'react'
import styled from 'styled-components'

export default function Tag({ tags, handleOnClick, active }) {
  return (
    tags === 'alle' ? <TagStyled active={active} data-filter='option' data-value='' onClick={handleOnClick} key={tags}>{tags}</TagStyled>
    : tags.map(tag => <TagStyled active={active} data-filter='option' data-value={tag} onClick={handleOnClick} key={tag}>{tag}</TagStyled>)
  )
}

const TagStyled = styled.div`
  display: inline-block;
  font-size: 0.6rem;
  padding: 9px;
  background: ${props => props.active ? '#90ccc2' : '#316ea9'};
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 5px 5px 0 0;
  cursor: pointer;
`