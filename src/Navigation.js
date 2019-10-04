import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <FooterStyled>
      <FooterFirstAreaStyled>Home</FooterFirstAreaStyled>
      <FooterSecondAreaStyled>Bookmarked</FooterSecondAreaStyled>
      <FooterThirdAreaStyled>Settings</FooterThirdAreaStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  text-align: center;
  display: grid;
  font-size: 0.8rem;
  grid-template-columns: 1fr 1fr 1fr;
`
const FooterFirstAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #4882BB;
  cursor: pointer;
  `
const FooterSecondAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #316EA9;
  cursor: pointer;
  `
const FooterThirdAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #21598F;
  cursor: pointer;
  `