require('babel-polyfill')

import FastClick from 'fastclick'
FastClick.attach(document.body)

import React, { Component } from 'react'
import { render } from 'react-dom'

import configureStore, { history } from './configureStore'
const store = configureStore()

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App'
import Kitchensink from './components/Kitchensink'
import HomePage from './components/HomePage'
import EntryPage from './components/EntryPage'

class Root extends Component {
  render () {
    return <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='entries/:id' component={EntryPage} />
          <IndexRoute component={HomePage} />
        </Route>
        <Route path='/kitchensink' component={Kitchensink} />
      </Router>
    </Provider>
  }
}

render(<Root />, document.getElementById('root'))

if (module.hot) { module.hot.accept() }
