import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './ArticleHeader.scss'
import Tag from './Tag'
import Pager from './Pager'

export default class ArticleHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    modifier: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    backgroundImageFilename: PropTypes.string
  }

  render () {
    const baseClass = 'ArticleHeader'
    const cls = classnames(baseClass, this.props.className, formatClassModifiers(baseClass, this.props.modifier))

    return <header className={cls} {...this.props}>
      <div className={`${baseClass}-image`} style={{backgroundImage: `url(/dummy-content/${this.props.backgroundImageFilename})`}}></div>
      <div className={`${baseClass}-inner`}>
        <div className={`${baseClass}-tagAndPager`}>
          <Tag modifiers='blocky hotRed'>Boulderbashing</Tag>
          <Pager />
        </div>

        <h1 className={`${baseClass}-heading`}>
          {this.props.title}
        </h1>
        <h2 className={`${baseClass}-subHeading`}>
          {this.props.subTitle}
        </h2>

      </div>
    </header>
  }
}
