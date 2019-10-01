import React from 'react'
import styled from 'styled-components'

export default function Tag({ text }) {
  return (
    <TagStyled>{text}</TagStyled>
  )
}

const TagStyled = styled.div`
  padding: 4px 10px;
  background: #235789;
  color: white;
  font-style: italic;
  border-radius: 12px;
  margin: 12px 0 0 0;
  text-transform: uppercase;
  `