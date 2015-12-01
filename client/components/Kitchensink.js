import React, { Component } from 'react'
import Tag from './Tag'

export default class Kitchensink extends Component {
  render () {
    return <div>
      KITCHENSINK
      <Tag>Swagtag</Tag>
      <Tag modifier='red'>Swagtag</Tag>
    </div>
  }
}
