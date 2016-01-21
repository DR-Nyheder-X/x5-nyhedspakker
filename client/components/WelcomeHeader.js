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
    ctaLabel: PropTypes.string,
    duration: PropTypes.string,
    backgroundImageFilename: PropTypes.string,
    onPlayButtonClick: PropTypes.func
  };

  render () {
    const baseClass = 'WelcomeHeader'
    const cls = classnames(baseClass, this.props.className, formatClassModifiers(baseClass, this.props.modifier))
    const imgixTestImage = 'http://thunderfluff.imgix.net/a.jpg?w=621&bw=621&sat=-100&blend=morningGradient.jpg&bm=multiply&bf=scale'

    return <header className={cls} {...this.props}>
      <div className={`${baseClass}-backgroundColor`}></div>
      <div className={`${baseClass}-image`} style={{backgroundImage: `url(${imgixTestImage})`}}></div>
      <div className={`${baseClass}-inner`}>
        <h1 className={`${baseClass}-heading`}>
          <span className={`${baseClass}-greeting`}>{this.props.greeting}</span>
          <span className={`${baseClass}-title`}>{this.props.title}</span>
        </h1>
        <div className={`${baseClass}-play`}>
          <p>{this.props.ctaLabel} <em>{this.props.duration}</em></p>
          <a onClick={this.props.onPlayButtonClick}>Play <i></i></a>
        </div>
      </div>
      {this.props.backgroundImageFilename}
    </header>
  }
}
