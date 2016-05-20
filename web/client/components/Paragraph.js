import React, { PropTypes } from 'react'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Paragraph.scss'
import Markdown from './Markdown'

export default function Paragraph ({body, modifiers, className}) {
  const cls = formatClassModifiers('Paragraph', modifiers, className)

  return <div className={cls}>
    <Markdown text={body} />
  </div>
}

Paragraph.propTypes = {
  body: PropTypes.string,
  className: PropTypes.string,
  modifiers: PropTypes.string
}

