import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { updatePath } from 'redux-simple-router'
import { connect } from 'react-redux'
import SmallStoryList from './SmallStoryList'
import SmallStory from './SmallStory'
import Tag from './Tag'
import WelcomeHeader from './WelcomeHeader'

const stateToProps = state => ({
  entries: state.entries.items,
  lastUpdated: state.entries.lastUpdated
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
  }

  render () {
    const { entries, dispatch } = this.props
    const handlePlayButtonClick = (event) => {
      event.preventDefault()
      dispatch(updatePath(`/entries/${entries[0].sys.id}`))
    }

    return <div className='HomePage'>
      <WelcomeHeader greeting='Godaften' title='Her er dagens nyheder' ctaLabel='Læsetid:' duration='3m 34s' backgroundImageFilename='blueToRedWelcomeHeader.jpg' onPlayButtonClick={handlePlayButtonClick} />
      <SmallStoryList>
        {entries.map(entry => (
          <SmallStory key={entry.sys.id}>
            <Link to={`/entries/${entry.sys.id}`}>
              <Tag>{entry.fields.hashtag}</Tag>
              {entry.fields.title}
            </Link>
          </SmallStory>
        ))}
      </SmallStoryList>
    </div>
  }
}

export default connect(stateToProps)(HomePage)
