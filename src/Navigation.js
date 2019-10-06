import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <FooterStyled>
      <FooterFirstAreaStyled to='/'>Home</FooterFirstAreaStyled>
      <FooterSecondAreaStyled to='/bookmarked'>Bookmarked</FooterSecondAreaStyled>
      <FooterThirdAreaStyled to='settings'>Settings</FooterThirdAreaStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  text-align: center;
  display: grid;
  font-size: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr;
`
const FooterFirstAreaStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #4882BB;
  text-decoration: none;
  `
const FooterSecondAreaStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #316EA9;
  text-decoration: none;
  `
const FooterThirdAreaStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #21598F;
  text-decoration: none;
  `