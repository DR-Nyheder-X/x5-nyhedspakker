import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SwiperComponent from './SwiperComponent'
import Entry from './Entry'
import { updatePath } from 'redux-simple-router'

const SLIDER_POSITIONS = {
  index: 0,
  entry: 1
}

const stateToProps = state => ({
  entries: state.entries.items
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func,
    params: PropTypes.object,
    dispatch: PropTypes.func
  }

  handleSlideChange (slider) {
    console.log('nav slide', slider.activeIndex)
    const { dispatch } = this.props

    if (slider.activeIndex === SLIDER_POSITIONS.index) {
      dispatch(updatePath('/'))
    } else if (slider.activeIndex === SLIDER_POSITIONS.entry) {
      const { entries } = this.props
      const entrySwiper = this.refs.entries.swiper
      const entry = entries[entrySwiper.activeIndex]
      if (entry) dispatch(updatePath(`/entries/${entry.sys.id}`))
    }
  }

  handleEntrySwipeChange (slider) {
    const nav = this.refs.nav.swiper
    if (nav.activeIndex === 0) return

    console.log('entry swipe', slider.activeIndex)
    const { dispatch, entries } = this.props
    const entry = entries[slider.activeIndex]
    if (entry) dispatch(updatePath(`/entries/${entry.sys.id}`))
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
      ref='nav'
      slide={id ? 1 : 0}
    >
      <div>
        {entries.map(entry => (
          <Link to={`/entries/${entry.sys.id}`} key={entry.sys.id}>
            <li>{entry.fields.title}</li>
          </Link>
        ))}
      </div>
      <div>
        {entryComponents.bind(this)(entries, selectedEntry)}
      </div>
    </SwiperComponent>
  }
}

function entryComponents (entries, selectedEntry) {
  const handleEntrySwipeChange =
    this.handleEntrySwipeChange.bind(this)

  return <SwiperComponent
    ref='entries'
    slide={entries.indexOf(selectedEntry)}
    onSlideChangeEnd={handleEntrySwipeChange}
  >
    {entries.map(entry => (
      <div key={entry.sys.id}>
        <Entry entry={entry} />
      </div>
    ))}
  </SwiperComponent>
}

export default connect(stateToProps)(HomePage)
