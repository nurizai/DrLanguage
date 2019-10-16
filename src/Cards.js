import React, { useState } from 'react'
import styled from 'styled-components'
import Tag from './Tag'
import email from './icons/email.svg'
import phone from './icons/phone.svg'
import DrRanaAddress from './images/DrRanaAddress.svg'
import {Star} from 'styled-icons/boxicons-solid/Star'

export default function Cards({
  name,
  specialist,
  address,
  tags,
  photo,
  location,
  onBookmarkClick,
  isBookmarked,
  emailAddress,
  phoneNumber
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  function renderDetails() {
    return (
      <>
        <address>{address}</address>
        <address>{location}</address>
      </>
    )
  }

  function handleBookmarkClick(event) {
    event.stopPropagation()
    onBookmarkClick()
  }

  return (
    <FullCardStyled>
      <BookmarkStyled onClick={(event) => handleBookmarkClick(event)} active={isBookmarked}/>
      <CardImg>
        <img src={photo} alt="Doctor" />
        <img src={DrRanaAddress} alt="Address" />
      </CardImg>
      <CardStyled>
        <h2>{name}</h2>
        <div>{specialist}</div>
        {renderTags()}
        <pre onClick={() => toggleCollapsed()}>&#9432;</pre>
        {collapsed && renderDetails()}
      </CardStyled>
      <CardButton>
        <CardButtonLeftStyled href={"mailto:" + emailAddress}><img src={email} alt="Email" /></CardButtonLeftStyled>
        <CardButtonRightStyled href={"tel:" + phoneNumber}><img src={phone} alt="Phone" /></CardButtonRightStyled>
      </CardButton>
    </FullCardStyled>
  )

  function renderTags() {
    return (
      <div>
        {<Tag tags={tags} />}
      </div>
    )
  }
}

const BookmarkStyled = styled(Star)`
  width: 27px;
  height: 27px;
  position: absolute;
  right: 2px;
  top: 2px;
  color: ${props => (props.active ? '#f7a80b': '#83909f')};
`
const CardStyled = styled.div`
  background: white;
  padding: 10px;

  > h2 {
      color: #222;
      display: inline;
      margin: 5px 0;
      font-family: Helvetica;
      font-size: 1rem;
      font-weight: 500;
    }

  > div, address {
    margin: 5px 0;
    font-family: Helvetica;
    font-size: 13px;
    color: #83909f;
    font-weight: 500;
  }

  > pre {
    margin: 0;
    width: 15px;
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
  height: auto;
  width: auto;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  margin: 15px;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.9);
  border-radius: 8px;
`

const CardImg = styled.div`
display: grid;
grid-template-columns: 109px 244px;

  & img:nth-of-type(1) {
    height: 109px;
    width: 109px;
    object-fit: cover;
    border-top-left-radius: 8px;
  }

  & img:nth-of-type(2) {
    border-top-right-radius: 8px;
    width: 236px;
    height: 109px;
    object-fit: cover;
  }
`