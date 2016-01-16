import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import { Link } from 'react-router'
import './Next.scss'

export default class Next extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string,
    backgroundImageFilename: PropTypes.string,
    to: PropTypes.string
  };

  render () {
    const cls = classnames(
      formatClassModifiers('Next', this.props.modifiers),
      this.props.className
    )

    return <Link to={this.props.to || ''} className={cls}>
      <div className='Next-backgroundColor'></div>
      <div className='Next-image' style={{backgroundImage: `url(${this.props.backgroundImageFilename})`}}></div>
      <div className='Next-inner'>
        <h2>{this.props.children}</h2>
        <svg className='Next-arrowRight' width='11' height='22' viewBox='0 0 11 22' xmlns='http://www.w3.org/2000/svg'><path d='M6.674 11.408L.114 2.7 2.508.897l7.668 10.177.322.243-7.824 10.382L.28 19.892l6.394-8.484z' fill='#FFFFFF' fill-rule='evenodd'/></svg>
      </div>
    </Link>
  }
}
