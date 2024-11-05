import React from 'react'
import Sidebar from './Sidebar'
import Main from "./Main"

function Container() {
  return (
    <div className='flex'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Container
