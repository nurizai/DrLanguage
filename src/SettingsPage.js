import React from 'react'
import styled from 'styled-components/macro'
import Page from './Page'

export default function SettingsPage({ onSubmit, title}) {

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const tags = data.tags.split(" ")
    const dataWithTagsArray = {
      ...data,
      tags: tags
    }

    onSubmit(dataWithTagsArray)
    form.reset()
    form.name.focus()
  }

  return (
    <Page title={title}>
      <FormStyled onSubmit={handleSubmit}>

        <LabelStyled>
          Name
        </LabelStyled>
        <input name="name" type="text"/>

        <LabelStyled>
          Fachbereich
        </LabelStyled>
        <input name="specialist" type="text"/>

        <LabelStyled>
          Sprache(n)
        </LabelStyled>
        <input name="tags" type="text"/>

        <LabelStyled>
          Straße/Nr.
        </LabelStyled>
        <input name="address" type="text"/>

        <LabelStyled>
          PLZ/Ort
        </LabelStyled>
        <input name="location" type="text"/>

        <LabelStyled>
          Telefon
        </LabelStyled>
        <input name="phoneNumber" type="text"/>

        <LabelStyled>
          E-Mail
        </LabelStyled>
        <input name="emailaddress" type="text"/>

        <ButtonStyled>
          Create card
        </ButtonStyled>

      </FormStyled>
    </Page>
  )
}

const FormStyled = styled.form`

  display: grid;
  grid-auto-rows: repeat(8, 1fr);
  padding: 20px;
  margin-top: 48px;

> input {
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;

    &:hover {
      border: 1px solid #4882BB;
    }
  }
`

const LabelStyled = styled.label`
margin-top: 10px;
`

const ButtonStyled = styled.button`
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  padding: 10px;
  background: #4882BB;
  color: white;
  cursor: pointer;
`