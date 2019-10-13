import React from 'react'
import styled from 'styled-components/macro'
import Page from './Page'
import axios from 'axios'

export default function SettingsPage({ onSubmit, title}) {

  const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

  function uploadToCloudinary(event) {
    event.preventDefault()
    const cloudinaryUrl = `${CORS_ANYWHERE}https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
    const photo = event.target.querySelector('input[name="photo"]').files[0]
    const form = event.target

    const formData = new FormData()
    formData.append('file', photo)
    formData.append('upload_preset', PRESET)

    axios
      .post(cloudinaryUrl, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(res => sendToMongoDB(form, res.data.url))
      .catch(err => console.log(err))
  }

  function sendToMongoDB(target, url) {
    const form = target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const tags = data.tags.split(" ").map(tag => tag.toLowerCase())
    const formattedData = {
      ...data,
      tags: tags,
      photo: url
    }

    onSubmit(formattedData)
    form.reset()
    form.name.focus()
  }

  return (
    <Page title={title}>
      <FormStyled onSubmit={uploadToCloudinary}>

        <LabelStyled>
          Name
        </LabelStyled>
        <input name="name" type="text"/>

        <LabelStyled>
          Foto
        </LabelStyled>
        <input name="photo" type="file"/>

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

  input {
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