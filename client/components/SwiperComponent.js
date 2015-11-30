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

const defaultProps = {
  autoHeight: false,
  direction: 'horizontal',
  initialSlide: 0,
  spaceBetween: 0,
  noSwiping: false
}

export default class SwiperComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    initialSlide: PropTypes.number
  }

  constructor (props) {
    super(props)

    const opts = swiperOptsFrom(props)

    this.swiperOpts =
      Object.assign({}, defaultProps, opts)
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

function swiperOptsFrom (props) {
  props = Object.assign({}, props)

  if (props.slide) {
    props.initialSlide = props.slide
    props.slide = undefined
  }

  return Object.keys(props)
  .filter(key => Object.keys(defaultProps).includes(key))
  .reduce((opts, key) => { opts[key] = props[key]; return opts }, {})
}
