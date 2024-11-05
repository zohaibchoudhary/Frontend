import React from 'react'
import Box from './Box'

function Main() {
    return (
    <div className='w-full h-screen'>
    <div className='flex'>
    <Box />    
    <Box />    
    <Box />
    </div>       
    <div className='flex'>
    <Box />    
    <Box />    
    <Box /></div>       
    </div>
  )
}

export default Main
