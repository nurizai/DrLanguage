import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Page from './Page'

export default function SettingsPage({ onSubmit, title}) {
  const [address, setAddress] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    onSubmit(data)
    form.reset()
    form.name.focus()
  }

  const Address = () => (
    <section css="color: #333">
      <small>
        <em>Preview:</em>
      </small>
      <br/>

    </section>
  )

  return (
    <Page title={title}>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          Name
          <input name="name"/>
        </LabelStyled>
        <LabelStyled>
          Fachbereich
          <textarea name="specialist"/>
        </LabelStyled>
        <LabelStyled>
          Sprache(n)
          <textarea name="tags"/>
        </LabelStyled>
        <LabelStyled>
          Address
        <textarea name="address" onChange={event => setAddress(event.target.value)} />
        </LabelStyled>
        {address && <Address />}
        <ButtonStyled>
          Create card
        </ButtonStyled>
      </FormStyled>
    </Page>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 10px;
  border-bottom: 1px solid black;

  > textarea {
    padding-top: 20px;
    cursor: pointer;
    border: none;
    color: #1c1e21;
    direction: ltr;
    line-height: 1.34;
    font-size: 12px;
  }

  > input {
    padding-top: 20px;
    cursor: pointer;
    border: none;
    color: #1c1e21;
    direction: ltr;
    line-height: 1.34;
    font-size: 12px;
  }
`

const ButtonStyled = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px;
  background: #4882BB;
  color: white;
  cursor: pointer;
`