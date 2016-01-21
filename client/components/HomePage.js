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
  lastUpdated: state.pkg.lastUpdated,
  readIds: state.readStates.ids
})

class HomePage extends Component {
  static propTypes = {
    pkg: PropTypes.object,
    entries: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func,
    readIds: PropTypes.arrayOf(PropTypes.string)
  };

  render () {
    const {
      pkg,
      entries,
      dispatch,
      readIds
    } = this.props

    if (!pkg) {
      return <h1>Loading</h1>
    }

    const handlePlayButtonClick = (event) => {
      event.preventDefault()
      dispatch(pushPath(`/entries/${entries[0].sys.id}`))
    }

    return <div className='HomePage'>
      <WelcomeHeader greeting={pkg.fields.is_morning ? 'Godmorgen' : 'Godaften'} title='Her er dagens nyheder' ctaLabel='Læsetid:' duration={pkg.fields.reading_time} backgroundImageFilename={pkg.fields.featured_image.fields.file.url} onPlayButtonClick={handlePlayButtonClick} />
      <SmallStoryList>
        {entries.map(entry => {
          const read = readIds.indexOf(entry.sys.id) > -1
          return <SmallStory key={entry.sys.id} modifiers={read ? 'done' : undefined}>
            <Link to={`/entries/${entry.sys.id}`}>
              <Tag>{entry.fields.hashtag}</Tag>
              {entry.fields.title}
            </Link>
          </SmallStory>
        })}
      </SmallStoryList>
    </div>
  }
}

export default connect(stateToProps)(HomePage)
