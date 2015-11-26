import React, { PropTypes } from 'react'
import Markdown from './Markdown'

export default function Entry ({ entry }) {
  console.log(entry)
  return <div className='Entry'>
    <h2>{entry.fields.hashtag}</h2>
    <h1>{entry.fields.title}</h1>
    <Markdown text={entry.fields.body} />
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}
