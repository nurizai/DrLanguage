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
    return (
      <TagListStyled>
        {tags.map(tag => <Tag key={tag} text={tag} />)}
      </TagListStyled>
    )
  }
}

const TagListStyled = styled.ul`
  list-style-type: none;
  padding: 0 10px;
`

const CardStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  border-radius: 8px 8px 0 0;
  background: white;
  padding: 10px;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);

  > div {
    margin: 5px 10px 5px 10px;
    font-family: Helvetica;
    font-size: 0.9rem;
  }

  > h2 {
    margin: 10px auto 5px 10px;
    font-family: Helvetica;
    font-size: 1rem;
  }
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
margin: 10px 10px 5px 10px;
`