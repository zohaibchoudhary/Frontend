import { useState,  useEffect } from 'react'
import { ReactDOM } from 'react-dom'
import axios from 'axios'
import moment from 'moment'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then((res) => {
      const response = res.data
      // console.log(response)
      
    } )
  }, [])
  return (
    <>
    
    </> 
  )
}

export default App
