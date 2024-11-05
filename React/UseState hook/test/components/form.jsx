import { useState } from 'react'
import './App.css'

function Form() {

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const changeData = (name) => (e) => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }

  return (
    <>
    <div className='form'>
    <form className='border'>
      <h1>Register</h1>
      
      <input type="text" value={data.username} onChange={changeData("username")} placeholder='Enter your username...' />
      
      <input type="email" value={data.email} onChange={changeData("email")} placeholder='Enter your email...' />
      
      <input type="password" value={data.password} onChange={changeData("password")} placeholder='Enter your password...' />

      <button type="submit">Register</button>
    </form>
    </div>
    </>
  )
}

export default Form
