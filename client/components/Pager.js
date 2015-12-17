import React, { PropTypes } from 'react'
import { times } from 'lodash'
import classnames from 'classnames'
import './Pager.scss'

export default function Figure ({ page, total }) {
  return <nav className='Pager'>
    {times(total).map(i => (
      <i key={i} className={classnames({ isActive: i === page })} />
    ))}
  </nav>
}

Figure.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
