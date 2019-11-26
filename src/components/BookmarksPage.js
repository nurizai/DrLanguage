import React from 'react'
import CardList from './CardList'
import Page from '../common/Page'

export default function BookmarksPage({ title, filteredCards, onBookmarkClick, onEditClick, goToMap, handleDeleteClick }) {

  // Empty values because cards on BookmarkPage are not filtered
  const filter = {
    language: '',
    specialist: '',
    location: ''
  }

  return (
    <Page title={title}>
      <CardList cards={filteredCards} onBookmarkClick={onBookmarkClick} filter={filter} onEditClick={onEditClick} goToMap={goToMap} onDeleteClick={handleDeleteClick}></CardList>
    </Page>
  )
}