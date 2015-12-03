import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './WelcomeHeader.scss'

export default class WelcomeHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    modifier: PropTypes.string,
    greeting: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    backgroundImageFilename: PropTypes.string
  }

  render () {
    const baseClass = 'WelcomeHeader'
    const cls = classnames(baseClass, this.props.className, formatClassModifiers(baseClass, this.props.modifier))

    return <header className={cls} {...this.props}>
      <div className={`${baseClass}-image`} style={{backgroundImage: `url(/dummy-content/${this.props.backgroundImageFilename})`}}></div>
      <div className={`${baseClass}-inner`}>
        <h1 className={`${baseClass}-heading`}>
          <span className={`${baseClass}-greeting`}>{this.props.greeting}</span>
          <span className={`${baseClass}-title`}>{this.props.title}</span>
        </h1>
        <div className={`${baseClass}-play`}>
          <span>Læsetid: {this.props.duration}</span>
          <a href='#'>Play</a>
        </div>
      </div>
    </header>
  }
}
