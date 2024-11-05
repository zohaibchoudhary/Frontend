import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Fields({name, email, index}) {
  return (
    <div className='flex w-1/2 items-center justify-between mt-2  py-0 shadow-xl text-2xl mb-2'>
      <h3>{name}</h3>
      <h3>{email}</h3>

      <Button 
      variant="contained" 
      color="error"
      >
        <DeleteIcon />
      </Button>
    </div>
  )
}

export default Fields
