import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Figure.scss'

export default class Figure extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string,
    description: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('Figure', this.props.modifiers),
      this.props.className
    )

    return <div className={cls} {...this.props}>
      <div className='Figure-figure'>{this.props.children}</div>
      <p className='Figure-description'>{this.props.description}</p>
    </div>
  }
}
