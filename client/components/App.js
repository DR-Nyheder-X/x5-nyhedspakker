import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackage } from '../actions'
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup'

import './App.scss'

const iosVersion = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false

class App extends Component {
  static propTypes = {
    fetchPackage: PropTypes.func,
    children: PropTypes.node
  };

  componentDidMount () {
    this.props.fetchPackage()
  }

  render () {
    const duration = 250

    return <div className='App' data-ios-version={iosVersion}>
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
