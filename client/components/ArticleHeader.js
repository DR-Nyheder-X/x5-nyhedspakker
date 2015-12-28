import React, { PropTypes } from 'react'
import formatClassModifiers from '../utilities/formatClassModifiers'
import Tag from './Tag'
import Pager from './Pager'
import { Link } from 'react-router'
import './ArticleHeader.scss'
import './BackButton.scss'

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
    <div className='BackButton'>
      <Link to='/'>
        <svg className='Next-arrowRight' width='11' height='22' viewBox='0 0 11 22' xmlns='http://www.w3.org/2000/svg'><path d='M6.674 11.408L.114 2.7 2.508.897l7.668 10.177.322.243-7.824 10.382L.28 19.892l6.394-8.484z' fill='#FFFFFF' fill-rule='evenodd'/></svg>
      </Link>
    </div>
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
