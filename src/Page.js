import React from 'react'
import styled from 'styled-components/macro'

export default function Page({ title, children }) {
  return (
    <PageStyled>
      <Header>{title}</Header>
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.main`
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
`
const Header = styled.div`
  z-index: 500;
  position: fixed;
  height: 48px;
  width: 100vw;
  font-weight: bold;
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  background: #4882BB;
  color: white;
  text-transform: uppercase;
`
