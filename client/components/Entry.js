import React, { PropTypes } from 'react'
import Markdown from './Markdown'
import ArticleHeader from './ArticleHeader'
import Figure from './Figure'

export default function Entry ({ entry, pos }) {
  console.log(entry)

  const { title, body, hashtag, nyhedensTal, nyhedensTalBeskrivelse, readMore, tekstafsnit2 } = entry.fields

  return <div className='Entry'>
    <ArticleHeader title={title} backgroundImageFilename='blueToRedWelcomeHeader.jpg' pos={pos} hashtag={hashtag} />
    <Markdown text={body} />
    {nyhedensTal && (
      <Figure description={nyhedensTalBeskrivelse}>{nyhedensTal}</Figure>
    )}
    {tekstafsnit2 && (
      <Markdown text={tekstafsnit2} />
    )}
    <p><a href={readMore}>Læs mere på DR.dk</a></p>
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired
}
