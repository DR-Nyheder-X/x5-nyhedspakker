import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SwiperComponent from './SwiperComponent'
import Entry from './Entry'
import { updatePath } from 'redux-simple-router'
import { findDOMNode } from 'react-dom'

const SWIPER_POSITIONS = {
  index: 0,
  entry: 1
}

const stateToProps = state => ({
  entries: state.entries.items,
  lastUpdated: state.entries.lastUpdated
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func,
    params: PropTypes.object,
    dispatch: PropTypes.func
  }

  render () {
    const { entries } = this.props

    return <div className='HomePage'>
      {entries.map(entry => (
        <Link to={`/entries/${entry.sys.id}`} key={entry.sys.id}>
          <li>{entry.fields.title}</li>
        </Link>
      ))}
    </div>
  }
}

export default connect(stateToProps)(HomePage)
