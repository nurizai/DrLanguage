import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import BookmarkStar from './icons/star.svg'
import create from './icons/create.svg'
import Home from './icons/home.svg'
import Map from './icons/map.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <FooterAreaStyled exact to='/'><img src={Home} alt="home"/></FooterAreaStyled>
      <FooterAreaStyled to='/bookmarked'><img src={BookmarkStar} alt="bookmark"/></FooterAreaStyled>
      <FooterAreaStyled to="/map"><img src={Map} alt="map"/></FooterAreaStyled>
      <FooterAreaStyled to='/settings'><img src={create} alt="create"/></FooterAreaStyled>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1px;
  background-color: #21598F;
  z-index: 10000;
`
const FooterAreaStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: #4882BB;

    &.active {
      background-color: #9fcacb;
  }
`