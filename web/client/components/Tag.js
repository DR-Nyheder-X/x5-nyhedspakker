import React, { PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Tag.scss'

export default function Tag ({ children, className, modifiers }) {
  const cls = classnames(
    formatClassModifiers('Tag', modifiers),
    className
  )

  return <div className={cls}>{children}</div>
}

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string
}
