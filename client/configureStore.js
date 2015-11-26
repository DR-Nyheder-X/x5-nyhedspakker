/* global __DEVELOPMENT */
import reducer from './reducers'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'

export const history = createBrowserHistory()

export default function configureStore () {
  const middleware = __DEVELOPMENT ? applyMiddleware(
    thunk,
    createLogger()
  ) : applyMiddleware(
    thunk
  )

  const createStoreWithMiddleware = compose(middleware)

  const store = createStoreWithMiddleware(createStore)(reducer)
  syncReduxAndRouter(history, store)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
