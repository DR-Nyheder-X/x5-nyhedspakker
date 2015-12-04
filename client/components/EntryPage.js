import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Entry from './Entry'
import SwiperComponent from './SwiperComponent'
import { Link } from 'react-router'
import './EntryPage.scss'
import { updatePath } from 'redux-simple-router'

const stateToProps = state => ({
  entries: state.entries.items
})

class EntryPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
  }

  handleSwipe (swiper) {
    // const { entries, dispatch } = this.props
    // const entry = entries[swiper.activeIndex]
    // dispatch(updatePath(`/entries/${entry.sys.id}`))
  }

  render () {
    const { entries } = this.props
    const { id } = this.props.params
    const entry = entries.find(entry => entry.sys.id === id)
    const handleSwipe = this.handleSwipe.bind(this)

    return <div className='EntryPage'>
      <TiledEntries
        entries={entries}
        selectedEntry={entry}
        onSwipe={handleSwipe}
      />
    </div>
  }
}

function TiledEntries ({ entries, onSwipe, selectedEntry }) {
  return <SwiperComponent
    className='TiledEntries'
    onSlideChangeEnd={onSwipe}
    runCallbacksOnInit={false}
    slide={entries.indexOf(selectedEntry)}
    >
    {entries.map(entry => (
      <div key={entry.sys.id}>
        <div className='BackButton'>
          <Link to='/'>INDEX</Link>
        </div>
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
