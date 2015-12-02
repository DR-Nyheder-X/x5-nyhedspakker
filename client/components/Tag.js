import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Tag.scss'

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('Tag', this.props.modifiers),
      this.props.className
    )

    return <div className={cls} {...this.props}>
      {this.props.children}
    </div>
  }
}
