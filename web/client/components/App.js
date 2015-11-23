import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render () {
    return <div className='App'>
      App!
      <Link to='/kitchensink'>Kitchensink</Link>
    </div>
  }
}
