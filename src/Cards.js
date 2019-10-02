import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import email from './icons/email.svg'
import phone from './icons/phone.svg'


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
        <CardButtonLeftStyled><img src={email} alt="Email" /></CardButtonLeftStyled>
        <CardButtonRightStyled><img src={phone} alt="Phone" /></CardButtonRightStyled>
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
  border-radius: 8px 8px 0 0;
  background: white;
  padding: 10px;

  > div {
    margin: 5px 10px 5px 10px;
    font-family: Helvetica;
    font-size: 0.9rem;
    color: #83909f;
    font-weight: 500;
  }

  > h2 {
    margin: 10px auto 20px 10px;
    font-family: Helvetica;
    font-size: 1rem;
  }
`
const CardButton = styled.div`
display: inline;
`

const CardButtonLeftStyled = styled.button`
width: 50%;
height: 40px;
background: #83909f;
border-radius: 0 0 0 8px;
border: 0 solid #83909f;
`

const CardButtonRightStyled = styled.button`
width: 50%;
height: 40px;
background: #90ccc2;
border-radius: 0 0 8px 0;
border: 0 solid #90ccc2;
`

const FullCardStyled = styled.div`
grid: grid;
grid-template-rows: 1fr auto;
margin: 10px 10px 5px 10px;
box-shadow: 0 0 4px 0 rgba(0,0,0,0.50);
border-radius: 8px;
`