import React, { PropTypes } from 'react'
import Markdown from './Markdown'
import ArticleHeader from './ArticleHeader'
import Figure from './Figure'
import Paragraph from './Paragraph'

export default function Entry ({ entry, pos, modifiers }) {
  console.log(entry)

  const { title, body, hashtag, nyhedensTal, nyhedensTalBeskrivelse, readMore, tekstafsnit2 } = entry.fields

  return <div className='Entry'>
    <ArticleHeader title={title} backgroundImageFilename='blueToRedWelcomeHeader.jpg' pos={pos} hashtag={hashtag} modifiers={modifiers} />
    <Markdown text={body} />
    {nyhedensTal && (
      <Figure
        description={nyhedensTalBeskrivelse}
        modifiers={modifiers}>
        {nyhedensTal}
      </Figure>
    )}
    {tekstafsnit2 && (
      <Markdown text={tekstafsnit2} />
    )}
    <Paragraph modifiers={modifiers}>
      <a href={readMore}>Læs mere på DR.dk</a>
    </Paragraph>
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  pos: PropTypes.object.isRequired,
  modifiers: PropTypes.string
}
