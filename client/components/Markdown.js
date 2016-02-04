import marked from 'marked'
import React, { PropTypes } from 'react'

export default function Markdown (props) {
  return <div
    dangerouslySetInnerHTML={{__html: marked(props.text)}}
    {...props}
  />
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired
}
