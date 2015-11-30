import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Entry from './Entry'
import SwiperComponent from './SwiperComponent'

const stateToProps = state => ({
  entries: state.entries
})

class EntryPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.object
  }

  render () {
    const { params } = this.props
    const { items } = this.props.entries
    const entry = items.find(entry => entry.sys.id === params.id)
    const selected = items.indexOf(entry)

    return <SwiperComponent className='EntryPage' slide={selected}>
      {items.map(entry => (
        <Entry key={entry.sys.id} entry={entry} />
      ))}
    </SwiperComponent>
  }
}

export default connect(stateToProps)(EntryPage)
