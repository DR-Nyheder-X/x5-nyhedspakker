import React, { PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './SmallStory.scss'

export default function SmallStory ({ children, className, modifiers }) {
  const cls = classnames(
    formatClassModifiers('SmallStory', modifiers),
    className
  )

  return <div className={cls}>
    {children}
  </div>
}

SmallStory.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string
}
