import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const stateToProps = state => ({
  entries: state.entries.items
})

class Entry extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    const entry = this.props.entries.find(entry => entry.sys.id === this.props.params.id)

    return <div>
      <h1>{entry && entry.fields.title}</h1>
    </div>
  }
}

export default connect(stateToProps)(Entry)
