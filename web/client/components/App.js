import React from 'react'

import './App.scss'

export default function App ({ children }) {
  return <div className='App'>
    <h1>Nyhedspakkelakker</h1>
    {children}
  </div>
}
