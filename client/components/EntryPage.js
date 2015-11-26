import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Entry from './Entry'

const stateToProps = state => ({
  entries: state.entries.items
})

class EntryPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    const entry = this.props.entries.find(entry => entry.sys.id === this.props.params.id)

    return <Entry entry={entry} />
  }
}

export default connect(stateToProps)(EntryPage)
