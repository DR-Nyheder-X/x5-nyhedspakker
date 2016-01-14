import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackage } from '../actions'
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup'

import './App.scss'

class App extends Component {
  static propTypes = {
    fetchPackage: PropTypes.func,
    children: PropTypes.node
  }

  componentDidMount () {
    this.props.fetchPackage()
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

export default connect(null, { fetchPackage })(App)
