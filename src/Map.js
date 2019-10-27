import React from 'react'
import Page from './Page'

export default function Map({ title, data }) {

  console.log(data)

  return (
    <Page title={title}>
      <br /><br /><br />
      <h1>Here comes the map yo!</h1>
    </Page>
  )

}