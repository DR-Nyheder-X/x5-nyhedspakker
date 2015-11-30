import React, {
  Component,
  PropTypes,
  Children,
  cloneElement
} from 'react'
import Swiper from 'swiper'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'

import './SwiperComponent.scss'

export default class SwiperComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    initialSlide: PropTypes.number,
    direction: PropTypes.oneOf(['horizontal', 'vertical'])
  }

  static defaultProps = {
    initialSlide: 0,
    direction: 'horizontal',
    spaceBetween: 0
  }

  constructor (props) {
    super(props)

    const opts = swiperOptsFrom(props)

    this.swiperOpts =
      Object.assign({}, SwiperComponent.defaultProps, opts)
  }

  componentDidMount () {
    if (!this.swiper) {
      this.swiper = new Swiper(findDOMNode(this), this.swiperOpts)
    }
  }

  componentWillUnmount () {
    console.log('unmoutn')
    this.swiper.destroy()
  }

  componentWillReceiveProps (newProps, oldProps) {
    if (this.swiper) {
      this.swiper.update()

      if (newProps.slide !== oldProps.slide) {
        this.swiper.slideTo(newProps.slide)
      }
    }
  }

  render () {
    const cls = classnames('swiper-container', this.props.className)

    return <div className={cls}>
      <div className='swiper-wrapper'>
        {Children.map(this.props.children, node => (
          cloneElement(node, { className: 'swiper-slide' })
        ))}
      </div>
    </div>
  }
}

const swiperOptions = [
  'initialSlide',
  'direction',
  'onSlideChangeEnd'
]

function swiperOptsFrom (props) {
  props = Object.assign({}, props)

  if (props.slide) {
    props.initialSlide = props.slide
    props.slide = undefined
  }

  return Object.keys(props)
  .filter(key => swiperOptions.includes(key))
  .reduce((opts, key) => { opts[key] = props[key]; return opts }, {})
}
