import React from 'react'
import CardList from './CardList'
import Page from './Page'

export default function BookmarksPage({ title, filteredCards, handleBookmarkClick }) {
  return (
    <Page title={title}>
      <h1>Test</h1>
    </Page>
  )
}

// <CardList cards={filteredCards} onBookmarkClick={handleBookmarkClick}/>
