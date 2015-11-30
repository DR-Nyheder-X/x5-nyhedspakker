import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions'

import './App.scss'

class App extends Component {
  static propTypes = {
    fetchEntries: PropTypes.func,
    children: PropTypes.node
  }

  componentDidMount () {
    this.props.fetchEntries()
  }

  render () {
    return <div className='App'>
      {this.props.children}
    </div>
  }
}

export default connect(null, { fetchEntries })(App)
