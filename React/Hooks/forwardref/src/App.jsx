import { useState, useRef } from 'react'
import './App.css'
import Search from './components/search'

function App() {
  
  const inputRef = useRef()


  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <h1>Forward Ref</h1>

      <Search ref={inputRef} />

      <button onClick={handleClick}>
        Click to focus
      </button>
    </>
  )
}

export default App
