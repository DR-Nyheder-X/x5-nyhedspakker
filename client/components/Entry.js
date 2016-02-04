import React, { PropTypes } from 'react'
import ArticleHeader from './ArticleHeader'
import Figure from './Figure'
import Paragraph from './Paragraph'
import Quote from './Quote'
import Next from './Next'

export default function Entry ({ entry, pos, modifiers, nextEntry }) {
  const {
    title,
    body,
    hashtag,
    nyhedensTal,
    nyhedensTalBeskrivelse,
    tekstafsnit2,
    quote,
    quoteSource,
    rubrik,
    featuredImage
  } = entry.fields

  return <div className='Entry'>
    <ArticleHeader title={title} backgroundImageFilename={featuredImage && featuredImage.fields.file.url} pos={pos} hashtag={hashtag} modifiers={modifiers} subTitle={rubrik} />
    <Paragraph modifiers={modifiers} body={body} />
    {quote && (
      <Quote
        cite={quoteSource}
        modifiers={modifiers}
      >{quote}</Quote>
    )}
    {tekstafsnit2 && (
      <Paragraph modifiers={modifiers} body={tekstafsnit2} />
    )}
    {nyhedensTal && (
      <Figure
        description={nyhedensTalBeskrivelse}
        modifiers={modifiers}
      >{nyhedensTal}</Figure>
    )}
    {nextEntry && (
      <Next to={`/entries/${nextEntry.sys.id}`} modifiers={modifiers} backgroundImageFilename={nextEntry.fields.featuredImage && nextEntry.fields.featuredImage.fields.file.url}>
        {nextEntry.fields.title}
      </Next>
    )}
  </div>
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  pos: PropTypes.object.isRequired,
  modifiers: PropTypes.string
}
