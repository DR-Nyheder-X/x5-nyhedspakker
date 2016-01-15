import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import formatClassModifiers from '../utilities/formatClassModifiers'
import Tag from './Tag'
import Pager from './Pager'
import { Link } from 'react-router'
import './ArticleHeader.scss'
import './BackButton.scss'
import './DownButton.scss'
import './GalleryButton.scss'

export default class ArticleHeader extends Component {
  static propTypes = {
    backgroundImageFilename: PropTypes.string,
    className: PropTypes.string,
    hashtag: PropTypes.string.isRequired,
    modifiers: PropTypes.string,
    pos: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
  };

  scrollToContent (e) {
    e.preventDefault()

    const entryNode = findDOMNode(this).parentNode
    const slideNode = entryNode && entryNode.parentNode
    if (slideNode) {
      slideNode.scrollTop = 600
    }
  }

  render () {
    const {
      backgroundImageFilename,
      className,
      hashtag,
      modifiers,
      pos,
      title,
      subTitle
    } = this.props
    const baseClass = 'ArticleHeader'
    const cls = formatClassModifiers(baseClass, modifiers, className)

    return <header className={cls}>
      <div className={`${baseClass}-backgroundColor`}></div>
      <div className={`${baseClass}-image`} style={{backgroundImage: `url(${backgroundImageFilename})`}}></div>
      <div className={`${baseClass}-inner`}>
        <div className='BackButton'>
          <Link to='/'>
            <svg className='Next-arrowRight' width='11' height='22' viewBox='0 0 11 22' xmlns='http://www.w3.org/2000/svg'><path d='M6.674 11.408L.114 2.7 2.508.897l7.668 10.177.322.243-7.824 10.382L.28 19.892l6.394-8.484z' fill='#FFFFFF' fill-rule='evenodd'/></svg>
          </Link>
        </div>

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
      <div className='DownButton'>
        <a onClick={this.scrollToContent.bind(this)}>
          <svg className='Next-arrowRight' width='11' height='22' viewBox='0 0 11 22' xmlns='http://www.w3.org/2000/svg'><path d='M6.674 11.408L.114 2.7 2.508.897l7.668 10.177.322.243-7.824 10.382L.28 19.892l6.394-8.484z' fill='#FFFFFF' fill-rule='evenodd'/></svg>
        </a>
      </div>

      <div className='GalleryButton'>
        <Link to='#'>
          <svg width='17' height='21' viewBox='0 0 17 21' xmlns='http://www.w3.org/2000/svg'><g fill='#FFF' fill-rule='evenodd'><path d='M0 0h9v13H0zM11 2h2v13h-2V2zM2 15h11v2H2v-2zM15 6h2v13h-2V6zM6 19h11v2H6v-2z'/></g></svg>
        </Link>
      </div>
    </header>
  }
}
