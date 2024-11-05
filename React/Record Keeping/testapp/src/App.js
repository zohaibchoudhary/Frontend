import React from 'react'
import Header from './components/header'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import './App.css'
import { Stack } from '@mui/material';
import { useState } from 'react';
import Fields from './components/fields';





function App() {

  const [name,setName]=useState("")
  const [email,setEmail] =useState("")

  const [data,setData] = useState([]);

  const addData = () => {

    setData([
      ...data,
      {
      //  name,email
      name: name,
      email: email
    }
  ])
    
    setName("");
    setEmail("");
  }

  return (

<div className='App'>

<Header/>
<div className='form'>

<Stack direction='row' spacing={6}>

<TextField
          value={name}
          onChange={(e)=> setName(e.target.value)}
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          />
<TextField
      value={email}
      onChange={(e)=> setEmail(e.target.value)}    
      id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          />
<Button variant="contained" color='success' onClick={addData}> <AddIcon/> </Button>
          </Stack>
          </div>
          
          {/* data show */}
          <div className='data'>
            <div className='data_val'>
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Remove</h4>
            </div>


            {
              data.map((element,index) =>{
                return (
                  <Fields key={index} name={element.name} email={element.email} index={index}/>
                )
              })

            }
             
          </div>
    </div>
  )
}

export default App
