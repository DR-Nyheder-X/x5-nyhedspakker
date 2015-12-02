import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './SmallStory.scss'

export default class SmallStory extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('SmallStory', this.props.modifiers),
      this.props.className
    )

    return <div className={cls} {...this.props}>
      {this.props.children}
    </div>
  }
}
