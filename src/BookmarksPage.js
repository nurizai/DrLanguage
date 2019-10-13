import React from 'react'
import CardList from './CardList'
import Page from './Page'

export default function BookmarksPage({ title, filteredCards, onBookmarkClick }) {
  return (
    <Page title={title}>
      <CardList cards={filteredCards} onBookmarkClick={onBookmarkClick}></CardList>
    </Page>
  )
}