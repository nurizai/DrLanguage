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
  display: grid;
  grid-template-rows: 48px auto;
  align-content: flex-start;
  overflow: auto;
`
const Header = styled.header`
  font-weight: bold;
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  background: #4882BB;
  color: white;
`
