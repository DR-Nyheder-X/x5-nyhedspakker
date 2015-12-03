import React, { PropTypes } from 'react'
import Markdown from './Markdown'
import { Link } from 'react-router'
import Tag from './Tag'

export default function Entry ({ entry }) {
  return <div className='Entry'>
    <Tag>{entry.fields.hashtag}</Tag>
    <h1>
      <Link to={`/entries/${entry.sys.id}`}>
        {entry.fields.title}
      </Link>
    </h1>
    <Markdown text={entry.fields.body} />
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}
