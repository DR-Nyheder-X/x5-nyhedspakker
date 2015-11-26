import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions'
import Entry from './Entry'

const stateToProps = state => ({
  entries: state.entries.items
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func
  }

  componentDidMount () {
    if (this.props.entries.length === 0) {
      this.props.fetchEntries()
    }
  }

  render () {
    const { entries } = this.props

    return <div className='HomePage'>
      <Link to='/kitchensink'>Kitchensink</Link>

      {entries.map(entry => (
        <Entry key={entry.sys.id} entry={entry} />
      ))}
    </div>
  }
}

export default connect(stateToProps, { fetchEntries })(HomePage)
