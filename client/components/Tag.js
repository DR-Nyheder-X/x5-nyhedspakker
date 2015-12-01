import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'

export default class Tag extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifier: PropTypes.string
  }

  render () {
    const baseClass = 'Tag'
    const cls = classnames(baseClass, this.props.className, formatClassModifiers(baseClass, this.props.modifier))

    return <div className={cls} {...this.props}>
      {this.props.children}
    </div>
  }
}
