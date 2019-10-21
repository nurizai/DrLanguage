import React from 'react'
import CardList from './CardList'
import Page from './Page'

export default function BookmarksPage({ title, filteredCards, onBookmarkClick }) {

  // Empty values because cards on BookmarkPage are not filtered
  const filter = {
    language: '',
    specialist: '',
    location: ''
  }

  return (
    <Page title={title}>
      <CardList cards={filteredCards} onBookmarkClick={onBookmarkClick} filter={filter}></CardList>
    </Page>
  )
}