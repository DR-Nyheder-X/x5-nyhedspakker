import React, { PropTypes } from 'react'
import Markdown from './Markdown'
import { Link } from 'react-router'

export default function Entry ({ entry }) {
  return <div className='Entry'>
    <h2>{entry.fields.hashtag}</h2>
    <h1>
      <Link to={`/entries/${entry.sys.id}`}>
        {entry.fields.title}
      </Link>
    </h1>
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
    <Markdown text={entry.fields.body} />
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}
