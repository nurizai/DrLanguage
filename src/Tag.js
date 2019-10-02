import React from 'react'
import styled from 'styled-components'

export default function Tag({ text }) {
  return (
    <TagStyled>{text}</TagStyled>
  )
}

const TagStyled = styled.li`
  display: inline-block;
  font-family: Helvetica;
  font-size: 0.7rem;
  padding: 10px 10px;
  background: #235789;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 5px;
`