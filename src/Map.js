import React from 'react'
import Page from './Page'

export default function Map({ title, data }) {

  const token = process.env.REACT_APP_MAPBOX_TOKEN

  console.log(token)

  return (
    <Page title={title}>
      <br /><br /><br />
      <h1>Here comes the map yo!</h1>
    </Page>
  )

}