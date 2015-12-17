import React, { PropTypes } from 'react'
import classnames from 'classnames'
import formatClassModifiers from '../utilities/formatClassModifiers'
import './Figure.scss'

export default function Figure ({ children, className, modifiers, description }) {
  const cls = classnames(
    'Figure', className, formatClassModifiers(modifiers))

  return <div className={cls}>
    <div className='Figure-figure'>{children}</div>
    <p className='Figure-description'>{description}</p>
  </div>
}

Figure.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifiers: PropTypes.string,
  description: PropTypes.string
}

