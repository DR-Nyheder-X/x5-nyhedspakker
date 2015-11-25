import React from 'react'
import { Link } from 'react-router'

import './App.scss'

export default function App ({ children }) {
  return <div className='App'>
    <h1><Link to='/'>Nyhedspakkelakker</Link></h1>
    {children}
  </div>
}
