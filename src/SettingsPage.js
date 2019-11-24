import React from 'react'
import styled from 'styled-components/macro'
import Page from './Page'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function SettingsPage({ onSubmit, title }) {

  const history = useHistory()

  const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

  // TODO: Remove hardcoded and use .env.local file
  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME || 'dzxdrgtr4'
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET || 'p1cwzxo8'

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
    history.push('/')
  }

  return (
    <Page title={title}>
      <FormStyled onSubmit={uploadToCloudinary}>

        <LabelStyled>
          Name
        </LabelStyled>
        <input name="name" type="text" placeholder="Herr Dr. Max Mustermann" />
        <LabelStyled>
          Foto
        </LabelStyled>
        <input name="photo" type="file"/>
        <LabelStyled>
          Fachbereich
        </LabelStyled>
        <input name="specialist" type="text" placeholder="Allgemeinarzt" />
        <LabelStyled>
          Sprache(n)
        </LabelStyled>
        <input name="tags" type="text" placeholder="Deutsch Englisch Farsi" />
        <LabelStyled>
          Beschreibung
        </LabelStyled>
        <textarea name="description" type="text" placeholder="füge eine Beschreibung hinzu"/>
        <LabelStyled>
          Straße/Nr.
        </LabelStyled>
        <input name="address" type="text" placeholder="Max-Mustermann-Straße 12" />
        <LabelStyled>
          PLZ/Ort
        </LabelStyled>
        <input name="location" type="text" placeholder="12248 Hamburg" />
        <LabelStyled>
          Telefon
        </LabelStyled>
        <input name="phoneNumber" type="text" placeholder="040 76 37 474" />
        <LabelStyled>
          E-Mail
        </LabelStyled>
        <input name="email" type="text" placeholder="maxmustermann@gmail.de" />

      <ButtonStyled>
        Karte erstellen
      </ButtonStyled>

      </FormStyled>



    </Page>
  )
}

const FormStyled = styled.form`
  display: grid;
  grid-auto-rows: repeat(8, 1fr);
  padding: 20px;
  margin-top: 36px;
  margin-bottom: 48px;

  > input {
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;

      &:hover {
        border: 1px solid #4882BB;
      }
    }

  > textarea {
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    cursor: pointer;
  }
`



const LabelStyled = styled.label`
  margin-top: 15px;
  font-size: 14px;
  color: #3b3b3b;
`

const ButtonStyled = styled.button`
  margin-top: 15px;
  border: none;
  border-radius: 3px;
  padding: 10px;
  background: #316ea9;
  color: white;
  font-size: 0.8rem;
  cursor: pointer;
`