import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const stateToProps = state => ({
  posts: state.posts.items
})

class Home extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    fetchPosts: PropTypes.func
  }

  componentDidMount () {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts()
    }
  }

  render () {
    const { posts } = this.props

    return <div className='Home'>
      <Link to='/kitchensink'>Kitchensink</Link>

      {posts.map(post => (
        <div key={post.ID}>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      ))}
    </div>
  }
}

export default connect(stateToProps, { fetchPosts })(Home)
