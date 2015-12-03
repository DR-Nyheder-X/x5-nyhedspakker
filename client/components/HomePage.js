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

  componentDidMount () {
    this.swiper = findDOMNode(this).swiper
  }

  handleSlideChange (swiper) {
    // const { dispatch } = this.props

    // if (swiper.activeIndex === SWIPER_POSITIONS.index) {
    //   swiper.slides.off('touchmove', stopPropagation)
    //   // dispatch(updatePath('/'))
    // } else if (swiper.activeIndex === SWIPER_POSITIONS.entry) {
    //   swiper.slides.on('touchmove', stopPropagation)
    //   const { entries } = this.props
    //   const entrySwiper = this.refs.entries.swiper
    //   const entry = entries[entrySwiper.activeIndex]
    //   if (entry) dispatch(updatePath(`/entries/${entry.sys.id}`))
    // }
  }

  render () {
    const { entries } = this.props
    const { id } = this.props.params

    const selectedEntry = id &&
      entries.find(entry => entry.sys.id === id)

    const handleSlideChange = this.handleSlideChange.bind(this)

    return <SwiperComponent
      className='HomePage'
      direction='vertical'
      onSlideChangeEnd={handleSlideChange}
      slide={id ? SWIPER_POSITIONS.entry : SWIPER_POSITIONS.index}
      slideClassName='top-most-slide'
      onlyExternal
    >
      <div key={SWIPER_POSITIONS.index}>
        {entries.map(entry => (
          <Link to={`/entries/${entry.sys.id}`} key={entry.sys.id}>
            <li>{entry.fields.title}</li>
          </Link>
        ))}
      </div>
      <div key={SWIPER_POSITIONS.entry}>
        <TiledEntries entries={entries} selectedEntry={selectedEntry} />
      </div>
    </SwiperComponent>
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

export default connect(stateToProps)(HomePage)
