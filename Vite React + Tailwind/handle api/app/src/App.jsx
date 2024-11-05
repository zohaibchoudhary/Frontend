import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then((data) => {

      // let response = JSON.parse(res)
      // setProducts(data.length)
      console.log(data);
    })
  }, [])

  return (
    <>
    <h1>hello</h1>
    </>
  )
}

export default App
