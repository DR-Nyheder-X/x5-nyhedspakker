import React, { PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Quote.scss'

export default function Quote ({ children, className, modifiers, cite }) {
  const cls = classnames(
    formatClassModifiers('Quote', modifiers),
    className
  )

  return <blockquote className={cls}>
    <cite>{cite}</cite>
    <p>{children}</p>
  </blockquote>
}

Quote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string,
  cite: PropTypes.string
}
