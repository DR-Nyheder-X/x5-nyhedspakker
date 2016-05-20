import {
  REQUEST_PACKAGE,
  RECEIVE_PACKAGE,
  MARK_AS_READ
} from '../actions'

const storage = window.localStorage
const storageKey = '__readIds'
const initialIDs = storage.getItem(storageKey)

function readStatesReducer (state = {
  ids: initialIDs ? initialIDs.split(',') : []
}, action) {
  switch (action.type) {
    case MARK_AS_READ:
      const ids = state.ids.concat([action.id])
      const newState = { ...state, ids }
      storage.setItem(storageKey, ids.join(','))
      return newState
    default:
      return state
  }
}

function packageReducer (state = {
  isFetching: false,
  didInvalidate: false,
  item: null,
  entries: []
}, action) {
  switch (action.type) {
    case REQUEST_PACKAGE:
      return { ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_PACKAGE:
      return { ...state,
        isFetching: false,
        didInvalidate: false,
        item: action.pkg,
        entries: action.entries,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

export default combineReducers({
  routing: routeReducer,
  pkg: packageReducer,
  readStates: readStatesReducer
})
