import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Entry from './Entry'
import SwiperComponent from './SwiperComponent'
import colorOrder from '../utilities/colorOrder'
import './EntryPage.scss'
import { markAsRead } from '../actions'

const stateToProps = state => ({
  entries: state.pkg.entries
})

class EntryPage extends Component {
  static propTypes = {
    params: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
    markAsRead: PropTypes.func
  };

  componentDidMount () {
    const { dispatch, params } = this.props
    dispatch(markAsRead(params.id))
  }

  handleSwipe (swiper) {
    const { dispatch, entries } = this.props
    const { activeIndex } = swiper
    dispatch(markAsRead(entries[activeIndex].sys.id))
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
    {entries.map((entry, i) => (
      <div key={entry.sys.id}>
        <Entry
          entry={entry}
          pos={{total: entries.length, page: i}}
          modifiers={colorOrder[i]}
          nextEntry={entries[i + 1]}
        />
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
