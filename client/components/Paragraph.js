import React, { PropTypes } from 'react'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Paragraph.scss'

export default function Paragraph ({children, modifiers, className}) {
  const cls = formatClassModifiers('Paragraph', modifiers, className)

  return <p className={cls}>
    {children}
  </p>
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string
}

