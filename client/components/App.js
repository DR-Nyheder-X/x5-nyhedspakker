import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions'
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup'

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
    const duration = 250

    return <div className='App'>
      <RouteCSSTransitionGroup
        component='div' transitionName='page-transition'
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}
      >
        {this.props.children}
      </RouteCSSTransitionGroup>
    </div>
  }
}

export default connect(null, { fetchEntries })(App)
