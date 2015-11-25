import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const stateToProps = state => ({
  posts: state.posts.items
})

class Home extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  }

  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    const { posts } = this.props

    return <div className='Home'>
      <Link to='/kitchensink'>Kitchensink</Link>
      {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </div>
  }
}

export default connect(stateToProps, { fetchPosts })(Home)
