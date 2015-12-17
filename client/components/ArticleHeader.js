import React, { PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import Tag from './Tag'
import Pager from './Pager'
import './ArticleHeader.scss'

export default function ArticleHeader ({
  backgroundImageFilename,
  className,
  hashtag,
  modifier,
  pos,
  title
}) {
  const baseClass = 'ArticleHeader'
  const cls = classnames(
    baseClass, className,
    formatClassModifiers(modifier))

  return <header className={cls}>
    <div className={`${baseClass}-image`} style={{backgroundImage: `url(/dummy-content/${backgroundImageFilename})`}}></div>
    <div className={`${baseClass}-inner`}>
      <div className={`${baseClass}-tagAndPager`}>
        <Tag modifiers='blocky hotRed'>{hashtag}</Tag>
        <Pager total={pos.total} page={pos.page} />
      </div>

      <h1 className={`${baseClass}-heading`}>
        {title}
      </h1>
    </div>
  </header>
}

ArticleHeader.propTypes = {
  backgroundImageFilename: PropTypes.string,
  className: PropTypes.string,
  hashtag: PropTypes.string.isRequired,
  modifier: PropTypes.string,
  pos: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

