import React, { useState } from 'react'
import axios from 'axios'

export default function Header() {
    const [error, setError] = useState(true)
    const signupHandler = (e) => {
        e.preventDefault()
        setError(false)
        axios.post("")
    }
    const loginHandler = (e) => {}
return (
    <div className='flex items-center
    '>
    <div 
    className= 'flex ml-4'
    >
        <img className='w-12'
        src="https://static.vecteezy.com/system/resources/previews/004/435/790/original/colourful-play-button-icon-play-symbol-for-website-design-logo-app-ui-illustration-vector.jpg" alt="" />
    </div>
    <div>
    <h1 className='text-xl'>VideoTube</h1>
    </div>
    <div className='border border-black rounded-lg ml-56'>
        <div className='w-96'>
            <input
            className='w-80 h-8 ml-2 outline-none'
            type="search"
            placeholder='Search...'
            autoComplete='off'
            required
            />
            <button
            className='border border-blue-400 w-14 h-9 bg-blue-500 text-white text-sm'
            type='submit'>Search</button>
        </div>
    </div>
    <div className='flex'>
        <div className='ml-80'><button
        onClick={signupHandler}
        className='bg-orange-400 w-24 h-10 text-black rounded-md
        '>Sign Up</button></div>
        <div className='ml-5'><button
        onClick={loginHandler}
        className='bg-gray-200 w-24 h-10 text-black rounded-md
        '>Login</button></div>
    </div>
    </div>
)
}
