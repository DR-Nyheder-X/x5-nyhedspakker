import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Photo.scss'

export default class Photo extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string,
    imageUrl: PropTypes.string,
    caption: PropTypes.string
  }

  render () {
    const cls = classnames(
      formatClassModifiers('Photo', this.props.modifiers),
      this.props.className
    )

    return <div className={cls} style={{backgroundImage: `url(${this.props.imageUrl})`}}>
      <div className='Photo-caption'>
        <p>{this.props.caption}</p>
        <img src='/graphics/photoCaptionSlant.svg' />
      </div>
      <div className='Photo-progressBar'>
        <div><em style={{width: '33.33%'}}></em></div>
      </div>
      <a className='Photo-close' href='#'>
        <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><circle fill='#000' cx='12' cy='12' r='12'/><path fill='#000' d='M0 0h24v24H0z'/><g fill='#FFF'><path d='M5.282 16.596L16.596 5.282l2.122 2.122L7.404 18.718z'/><path d='M7.404 5.282l11.314 11.314-2.122 2.122L5.282 7.404z'/></g></g></svg>
      </a>
    </div>
  }
}
