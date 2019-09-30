import React, { useState } from 'react'
import styled from 'styled-components'


export default function Cards({
  name,
  bereich,
  adresse,
}) {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  function renderDetails() {
    return (
      <>
        <div>{name}</div>
      </>
    )
  }
  return (
    <CardStyled>
      <h2 onClick={() => toggleCollapsed()}>{name}</h2>
      {collapsed || renderDetails()}
      <p>Allgemeinarzt</p>
      <p>Hamburg</p>
    </CardStyled>
  )
}

const CardStyled = styled.section`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
`