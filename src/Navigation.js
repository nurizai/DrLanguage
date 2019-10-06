import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <FooterStyled>
      <FooterAreaStyled to='/'>Home</FooterAreaStyled>
      <FooterAreaStyled to='/bookmarked'>Bookmarked</FooterAreaStyled>
      <FooterAreaStyled to='settings'>Settings</FooterAreaStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 48px;
  width: 100vw;
  text-align: center;
  display: grid;
  font-size: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr;
`
const FooterAreaStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: bold;

  :nth-child(1) {
    background-color: #4882BB;
  }

  :nth-child(2) {
    background-color: #316EA9;
  }

  :nth-child(3) {
    background-color: #21598F;
  }
`