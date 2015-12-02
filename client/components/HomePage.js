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

    attachScrollTouchEventsTo(this.swiper)
  }

  handleSlideChange (swiper) {
    console.log('nav slide', swiper.activeIndex)

    const { dispatch } = this.props

    if (swiper.activeIndex === SWIPER_POSITIONS.index) {
      dispatch(updatePath('/'))
    } else if (swiper.activeIndex === SWIPER_POSITIONS.entry) {
    //   const { entries } = this.props
    //   const entrySwiper = this.refs.entries.swiper
    //   const entry = entries[entrySwiper.activeIndex]
    //   if (entry) dispatch(updatePath(`/entries/${entry.sys.id}`))
    }
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
        // <TiledEntries
        //   entries={entries}
        //   onSwipe={e => { console.log(e) }}
        //   selectedEntry={selectedEntry}
        // />
}

class TiledEntries extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    onSwipe: PropTypes.func,
    selectedEntry: PropTypes.object
  }

  render () {
    const { entries, selectedEntry } = this.props

    return <SwiperComponent
      slide={entries.indexOf(selectedEntry)}
      onSlideChangeEnd={this.props.onSwipe}
    >
    {entries.map(entry => (
      <div key={entry.sys.id}>
        <Entry entry={entry} />
      </div>
      ))}
    </SwiperComponent>
  }
}

function attachScrollTouchEventsTo (swiper) {
  let startScroll, touchStart, touchCurrent

  swiper.slides.on('touchstart', function (event) {
    startScroll = this.scrollTop
    touchStart = event.targetTouches[0].pageY
  }, true)

  swiper.slides.on('touchmove', function (event) {
    touchCurrent = event.targetTouches[0].pageY
    const diff = touchCurrent - touchStart
    const scrollable = this.scrollHeight >= this.offsetHeight
    const heightDiff = this.scrollHeight - this.offsetHeight
    const scrolling =
      scrollable &&
      (
        (diff < 0 && startScroll === 0) ||
        (diff > 0 && startScroll === heightDiff) ||
        (startScroll > 0 && startScroll < heightDiff)
      )
    const isEntry = swiper.activeIndex === SWIPER_POSITIONS.entry

    if (isEntry && scrolling) {
      event.stopPropagation()
    }
  }, true)
}

export default connect(stateToProps)(HomePage)
