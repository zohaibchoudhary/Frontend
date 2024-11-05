import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='text-3xl bg-orange-300 h-10 rounded-lg '>
      User : {userId}
    </div>
  )
}

export default User
