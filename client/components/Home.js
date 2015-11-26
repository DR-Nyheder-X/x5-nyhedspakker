import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions'

const stateToProps = state => ({
  entries: state.entries.items
})

class Home extends Component {
  static propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object),
    fetchEntries: PropTypes.func
  }

  componentDidMount () {
    if (this.props.entries.length === 0) {
      this.props.fetchEntries()
    }
  }

  render () {
    const { entries } = this.props

    return <div className='Home'>
      <Link to='/kitchensink'>Kitchensink</Link>

      {entries.map(entry => (
        <div key={entry.sys.id}>
          <h1>
            <Link to={`/entries/${entry.sys.id}`}>
              {entry.fields.title}
            </Link>
          </h1>
          <div dangerouslySetInnerHTML={{__html: entry.fields.body}} />
        </div>
      ))}
    </div>
  }
}

export default connect(stateToProps, { fetchEntries })(Home)
