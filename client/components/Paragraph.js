import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Paragraph.scss'

export default class Paragraph extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('Paragraph', this.props.modifiers),
      this.props.className
    )

    return <p className={cls}>
      {this.props.children}
    </p>
  }
}
