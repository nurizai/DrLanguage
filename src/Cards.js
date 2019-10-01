import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'


export default function Cards({
  name,
  bereich,
  adresse,
  tags,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  function renderDetails() {
    return (
      <>
        <div>{bereich}</div>
        <div>{adresse}</div>
        {renderTags()}
      </>
    )
  }
  return (
    <FullCardStyled>
      <CardStyled>
        <h2 onClick={() => toggleCollapsed()}>{name}</h2>
        {collapsed || renderDetails()}
      </CardStyled>
      <CardButton>
        <CardButtonLeftStyled/>
        <CardButtonRightStyled/>
      </CardButton>
    </FullCardStyled>
  )

  function renderTags() {
    return tags.map(tag => <Tag key={tag} text={tag} />)
  }
}

const CardStyled = styled.section`
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  position: relative;
  background: white;
  padding: 10px;
`
const CardButton = styled.div`
display: inline;
`

const CardButtonLeftStyled = styled.button`
width: 50%;
height: 48px;
background: #FFFFFF;
border-radius: 0 0 0 8px;
`

const CardButtonRightStyled = styled.button`
width: 50%;
height: 48px;
background: #03A87C;
border-radius: 0 0 8px 0;
`

const FullCardStyled = styled.div`
margin: 10px;
`