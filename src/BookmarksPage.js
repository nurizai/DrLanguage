import React from 'react'
import CardList from './CardList'
import Page from './Page'

export default function BookmarksPage({cards, title}) {
  return (
    <Page title={title}>
      <h1>Bookmarks Yo!</h1>
    </Page>
  )
}