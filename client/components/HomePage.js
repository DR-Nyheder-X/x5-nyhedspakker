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

function stopPropagation (event) {
  window.s = this
  event.stopPropagation()
}

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func,
    params: PropTypes.object,
    dispatch: PropTypes.func
  }

  componentDidMount () {
    this.swiper = findDOMNode(this).swiper
    this.swiper.slides.on('touchmove', stopPropagation)
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
    >
      <div key={SWIPER_POSITIONS.index}>
        {entries.map(entry => (
          <Link to={`/entries/${entry.sys.id}`} key={entry.sys.id}>
            <li>{entry.fields.title}</li>
          </Link>
        ))}
      </div>
      <div key={SWIPER_POSITIONS.entry}>
        {[0,1,2,3,4,5,6,7,8].map(i => <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non interdum mi, et porttitor augue. Nullam enim massa, porta quis tortor sed, viverra molestie magna. Ut gravida mauris et orci porta, eu rutrum sem convallis. Duis maximus sem eu ipsum feugiat, quis dictum neque laoreet. Donec sed pretium eros. Pellentesque nec nunc in purus venenatis tincidunt eu nec dui. Aenean non sem eros. Suspendisse eleifend volutpat elit, sed posuere ipsum mollis eu. Morbi suscipit eu nunc in auctor. In imperdiet luctus finibus. Fusce quis lectus nec nisl dignissim placerat eget ac neque. Sed vel diam suscipit, tempor enim sit amet, lobortis diam. Suspendisse nec lorem tortor. Sed efficitur sed sapien non imperdiet. Nam id sapien eget est eleifend congue tempor vitae massa.</p>)}
      </div>
    </SwiperComponent>
  }
        // <TiledEntries entries={entries} selectedEntry={selectedEntry} />
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

export default connect(stateToProps)(HomePage)
