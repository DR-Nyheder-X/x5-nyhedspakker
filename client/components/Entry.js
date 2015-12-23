import React, { PropTypes } from 'react'
import ArticleHeader from './ArticleHeader'
import Figure from './Figure'
import Paragraph from './Paragraph'
import Quote from './Quote'

export default function Entry ({ entry, pos, modifiers }) {
  console.log(entry)

  const { title, body, hashtag, nyhedensTal, nyhedensTalBeskrivelse, tekstafsnit2, quote, quoteSource } = entry.fields

  return <div className='Entry'>
    <ArticleHeader title={title} backgroundImageFilename='blueToRedWelcomeHeader.jpg' pos={pos} hashtag={hashtag} modifiers={modifiers} />
    <Paragraph modifiers={modifiers}>{body}</Paragraph>
    {quote && (
      <Quote
        cite={quoteSource}
        modifiers={modifiers}
      >{quote}</Quote>
    )}
    {tekstafsnit2 && (
      <Paragraph modifiers={modifiers}>{tekstafsnit2}</Paragraph>
    )}
    {nyhedensTal && (
      <Figure
        description={nyhedensTalBeskrivelse}
        modifiers={modifiers}
      >{nyhedensTal}</Figure>
    )}
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  pos: PropTypes.object.isRequired,
  modifiers: PropTypes.string
}
