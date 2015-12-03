import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import StaticContainer from 'react-static-container'
import { connect } from 'react-redux'

/**
 * <RouteCSSTransitionGroup> renders twice on a route change. On the first
 * render, it "freezes" the transitioning-out component by setting
 * `shouldUpdate` on the <StaticContainer> to `false`. This prevents any
 * <Link>s nested under the old component from updating their active state to
 * reflect the new location, to allow for a smooth transition out. It then
 * renders the new, transitioning-in component immediately afterward.
 */

const stateToProps = state => ({
  path: state.routing.path
})

class RouteCSSTransitionGroup extends Component {

  static propTypes = {
    path: PropTypes.string,
    children: PropTypes.node
  }

  constructor (props) {
    super(props)
    this.state = { previousPathname: null }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.path !== this.props.path) {
      this.setState({ previousPathname: this.props.path })
    }
  }

  componentDidUpdate () {
    if (this.state.previousPathname) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ previousPathname: null })
      /* eslint-enable react/no-did-update-set-state */
    }
  }

  render () {
    const { children, ...props } = this.props
    const { previousPathname } = this.state

    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer
          key={previousPathname || this.props.path}
          shouldUpdate={!previousPathname}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    )
  }
}

export default connect(stateToProps)(RouteCSSTransitionGroup)
