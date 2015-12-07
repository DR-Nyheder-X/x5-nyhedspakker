import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Quote.scss'

export default class Quote extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string,
    cite: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('Quote', this.props.modifiers),
      this.props.className
    )

    return <blockquote className={cls} {...this.props}>
      <cite>{this.props.cite}</cite>
      <p>{this.props.children}</p>
    </blockquote>
  }
}
