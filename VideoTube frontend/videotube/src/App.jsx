import { useState } from 'react'
import Header from './components/header'
// import Sidebar from './components/Sidebar'
import Container from './components/container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Container />
    </>
  )
}

export default App
