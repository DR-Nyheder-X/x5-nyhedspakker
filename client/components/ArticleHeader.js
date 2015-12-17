import React, { PropTypes } from 'react'
import formatClassModifiers from '../utilities/formatClassModifiers'
import Tag from './Tag'
import Pager from './Pager'
import './ArticleHeader.scss'

export default function ArticleHeader ({
  backgroundImageFilename,
  className,
  hashtag,
  modifiers,
  pos,
  title,
  subTitle
}) {
  const baseClass = 'ArticleHeader'
  const cls = formatClassModifiers(baseClass, modifiers, className)

  return <header className={cls}>
    <div className={`${baseClass}-image`} style={{backgroundImage: `url(/dummy-content/${backgroundImageFilename})`}}></div>
    <div className={`${baseClass}-inner`}>
      <div className={`${baseClass}-tagAndPager`}>
        <Tag modifiers={`blocky ${modifiers}`}>{hashtag}</Tag>
        <Pager total={pos.total} page={pos.page} />
      </div>

      <h1 className={`${baseClass}-heading`}>
        {title}
      </h1>

      <h2 className={`${baseClass}-subHeading`}>
        {subTitle}
      </h2>
    </div>
  </header>
}

ArticleHeader.propTypes = {
  backgroundImageFilename: PropTypes.string,
  className: PropTypes.string,
  hashtag: PropTypes.string.isRequired,
  modifiers: PropTypes.string,
  pos: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
