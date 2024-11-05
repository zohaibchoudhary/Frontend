import React, { createContext } from 'react'
import './App.css';
import ChildC from './ChildC';

const username = createContext()
const userAge = createContext() 

function App() {

  const name = 'Zohaib'
  const age = 19

  return (
    <>
    <username.Provider value={name}>
      <userAge.Provider value={age}>
        <ChildC />
      </userAge.Provider>
    </username.Provider>
    </>
  )
}

export default App
export {username, userAge}


 