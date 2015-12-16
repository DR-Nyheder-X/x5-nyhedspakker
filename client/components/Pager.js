import React, { Component, PropTypes } from 'react'
import './Pager.scss'

export default class Figure extends Component {
  render () {
    const cls = 'Pager'

    return <nav className={cls}>
      <i></i>
      <i></i>
      <i className="isActive"></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </nav>
  }
}
