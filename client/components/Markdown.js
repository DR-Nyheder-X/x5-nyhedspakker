import marked from 'marked'
import React from 'react'

export default function Markdown ({ text }) {
  return <div dangerouslySetInnerHTML={{__html: marked(text)}} />
}
