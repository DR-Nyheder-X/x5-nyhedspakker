import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import { Link } from 'react-router'
import './Next.scss'
import { blendColors } from './ArticleHeader'
import imgix from '../utilities/imgix'

export default class Next extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifiers: PropTypes.string,
    backgroundImageFilename: PropTypes.string,
    to: PropTypes.string
  };

  render () {
    const {
      backgroundImageFilename,
      to,
      children,
      modifiers,
      className
    } = this.props

    const cls = classnames(
      formatClassModifiers('Next', modifiers),
      className
    )

    const colorModifier = modifiers.split(' ')[0]
    const blends = Object.keys(blendColors)
    const blendIndex = blends.indexOf(colorModifier)
    const nextBlend = blends[blendIndex === -1 ? 0 : blendIndex]
    const image = imgix(backgroundImageFilename, null, {
      blend: blendColors[nextBlend]
    })

    return <Link to={to || ''} className={cls}>
      <div className='Next-backgroundColor'></div>
      <div className='Next-image' style={{backgroundImage: `url(${image})`}}></div>
      <div className='Next-inner'>
        <h2>{children}</h2>
        <svg className='Next-arrowRight' width='11' height='22' viewBox='0 0 11 22' xmlns='http://www.w3.org/2000/svg'><path d='M6.674 11.408L.114 2.7 2.508.897l7.668 10.177.322.243-7.824 10.382L.28 19.892l6.394-8.484z' fill='#FFFFFF' fill-rule='evenodd'/></svg>
      </div>
    </Link>
  }
}
