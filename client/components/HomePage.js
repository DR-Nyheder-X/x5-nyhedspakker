import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { pushPath } from 'redux-simple-router'
import { connect } from 'react-redux'
import SmallStoryList from './SmallStoryList'
import SmallStory from './SmallStory'
import Tag from './Tag'
import WelcomeHeader from './WelcomeHeader'

const stateToProps = state => ({
  pkg: state.pkg.item,
  entries: state.pkg.entries,
  lastUpdated: state.pkg.lastUpdated
})

class HomePage extends Component {
  static propTypes = {
    pkg: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func
  }

  render () {
    const { pkg, entries, dispatch } = this.props

    if (!pkg) {
      return <h1>Loading</h1>
    }

    const handlePlayButtonClick = (event) => {
      event.preventDefault()
      dispatch(pushPath(`/entries/${entries[0].sys.id}`))
    }

    return <div className='HomePage'>
      <WelcomeHeader greeting={pkg.fields.is_morning ? 'Godmorgen' : 'Godaften'} title='Her er dagens nyheder' ctaLabel='Læsetid:' duration='ca 5 min' backgroundImageFilename={pkg.fields.featured_image.fields.file.url} onPlayButtonClick={handlePlayButtonClick} />
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
