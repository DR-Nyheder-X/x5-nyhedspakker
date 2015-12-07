import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './ArticleHeader.scss'

export default class ArticleHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    modifier: PropTypes.string,
    title: PropTypes.string,
    backgroundImageFilename: PropTypes.string
  }

  render () {
    const baseClass = 'ArticleHeader'
    const cls = classnames(baseClass, this.props.className, formatClassModifiers(baseClass, this.props.modifier))

    return <header className={cls} {...this.props}>
      <div className={`${baseClass}-image`} style={{backgroundImage: `url(/dummy-content/${this.props.backgroundImageFilename})`}}></div>
      <div className={`${baseClass}-inner`}>
        <h1 className={`${baseClass}-heading`}>
          {this.props.title}
        </h1>
      </div>
    </header>
  }
}
