import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Entry from './Entry'
import SwiperComponent from './SwiperComponent'
import { Link } from 'react-router'

const stateToProps = state => ({
  entries: state.entries.items
})

class EntryPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    const { entries } = this.props
    const { id } = this.props.params
    const entry = entries.find(entry => entry.sys.id === id)

    return <TiledEntries entries={entries} selectedEntry={entry} />
  }
}

function TiledEntries ({ entries, onSwipe, selectedEntry }) {
  return <SwiperComponent
    className='TiledEntries'
    slide={entries.indexOf(selectedEntry)}
    onSlideChangeEnd={onSwipe}
    allowScroll
    >
    {entries.map(entry => (
      <div key={entry.sys.id}>
        <Link to='/'>INDEX</Link>
        <Entry entry={entry} />
      </div>
    ))}
  </SwiperComponent>
}

TiledEntries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  onSwipe: PropTypes.func,
  selectedEntry: PropTypes.object
}

export default connect(stateToProps)(EntryPage)
