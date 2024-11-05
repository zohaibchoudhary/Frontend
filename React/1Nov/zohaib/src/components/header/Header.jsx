import React from 'react'
// import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Header() {
  return (
    <div>
      <div>
      <Button variant="contained" className=' rounded-xl'>
        <AddIcon />
      </Button>
      <span className='text-3xl font-extrabold'>Onixlab</span>
      </div>
    </div>
  )
}

export default Header
