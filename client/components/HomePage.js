import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SmallStory from './SmallStory'
import Tag from './Tag'
import WelcomeHeader from './WelcomeHeader'

const stateToProps = state => ({
  entries: state.entries.items,
  lastUpdated: state.entries.lastUpdated
})

const colors = [
  'blue',
  'hotBlue',
  'red',
  'hotRed',
  'green',
  'seaGreen',
  'purple',
  'deepPurple',
  'teal',
  'orange',
  'magenta'
]

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    const { entries } = this.props

    return <div className='HomePage'>
      <WelcomeHeader greeting='Godaften' title='Her er dagens nyheder' ctaLabel='Læsetid:' duration='3m 34s' backgroundImageFilename='blueToRedWelcomeHeader.jpg' />
      {entries.map((entry, i) => {
        const color = colors[i]
        return <Link
          to={`/entries/${entry.sys.id}`}
          key={entry.sys.id}
        >
          <SmallStory modifiers={color}>
            <Tag modifiers={color}>{entry.fields.hashtag}</Tag>
            {entry.fields.title}
          </SmallStory>
        </Link>
      })}
    </div>
  }
}

export default connect(stateToProps)(HomePage)
