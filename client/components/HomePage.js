import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import SwiperComponent from './SwiperComponent'
import Entry from './Entry'

const stateToProps = state => ({
  entries: state.entries.items
})

class HomePage extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func
  }

  render () {
    const { entries } = this.props
    const { id } = this.props.params

    const selectedEntry = id &&
      entries.find(entry => entry.sys.id === id)

    return <SwiperComponent
      className='HomePage'
      direction='vertical'
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
        <Entries entries={entries} selectedEntry={selectedEntry} />
      </div>
    </SwiperComponent>
  }
}

function Entries ({ entries, selectedEntry }) {
  return <SwiperComponent slide={entries.indexOf(selectedEntry)}>
    {entries.map(entry => (
      <div key={entry.sys.id}>
        <Entry entry={entry} />
      </div>
    ))}
  </SwiperComponent>
}

export default connect(stateToProps)(HomePage)
