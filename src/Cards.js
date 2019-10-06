import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import email from './icons/email.svg'
import phone from './icons/phone.svg'
import DrRana from './images/DrRana.svg'
import DrRanaAddress from './images/DrRanaAddress.svg'


export default function Cards({
  name,
  specialized,
  address,
  tags,
  standort,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  function renderDetails() {
    return (
      <>
        <address>{address}</address>
        <address>{standort}</address>
        {renderTags()}
      </>
    )
  }

  return (
    <FullCardStyled>
      <CardImg>
        <img src={DrRana} alt="Doctor" />
        <img src={DrRanaAddress} alt="Address" />
      </CardImg>
      <CardStyled>
        <h2>{name}</h2>
        <div>{specialized}</div>
        <pre onClick={() => toggleCollapsed()}>&#9432;</pre>
        {collapsed && renderDetails()}
      </CardStyled>
      <CardButton>
        <CardButtonLeftStyled href="mailto:nuri_nb@hotmail.de"><img src={email} alt="Email" /></CardButtonLeftStyled>
        <CardButtonRightStyled href="tel:+4917 6129120"><img src={phone} alt="Phone" /></CardButtonRightStyled>
      </CardButton>
    </FullCardStyled>
  )

  function renderTags() {
    return (
      <div>
        {tags.map(tag => <Tag key={tag} text={tag} />)}
      </div>
    )
  }
}

const CardStyled = styled.div`
  background: white;
  padding: 10px;

  > h2 {
      color: #222;
      display: inline;
      margin: 10px;
      font-family: Helvetica;
      font-size: 1rem;
      font-weight: 500;
    }

  > div, address {
    margin: 10px;
    font-family: Helvetica;
    font-size: 13px;
    color: #83909f;
    font-weight: 500;
  }

  > pre {
    margin: 0 0 0 10px;
    color: #4882bb;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }
`
const CardButton = styled.div`
  display: inline;
`

const CardButtonLeftStyled = styled.a`
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 40px;
  background: #83909f;
  border-radius: 0 0 0 8px;
  border: 0 solid #83909f;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
`

const CardButtonRightStyled = styled.a`
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 40px;
  background: #90ccc2;
  border-radius: 0 0 8px 0;
  border: 0 solid #90ccc2;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
`

const FullCardStyled = styled.section`
  box-sizing: border-box;
  background-color: white;
  margin: 10px;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.8);
  border-radius: 8px;
`

const CardImg = styled.div`
display: grid;
grid-template-columns: 109px 244px;

  & img:nth-of-type(1) {
    border-top-left-radius: 8px;
  }

  & img:nth-of-type(2) {
    border-top-right-radius: 8px;
  }
`