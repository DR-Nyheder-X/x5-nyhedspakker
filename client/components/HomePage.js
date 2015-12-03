import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const stateToProps = state => ({
  entries: state.entries.items,
  lastUpdated: state.entries.lastUpdated
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object)
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
