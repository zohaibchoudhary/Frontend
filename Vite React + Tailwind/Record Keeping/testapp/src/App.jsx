import { useState } from 'react'
// import {useImmer} from 'use-immer'
import './App.css'
import Header from './Components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fields from './Components/Fields';


function App() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const [data, setData] = useState([])

   const addData = () => {
      setData([
        ...data, {
          name: name,
          email: email
        }
      ])
      setName('')
      setEmail('')
   }

  return(
    <div>
    <Header />
    <div className='mt-7 text-center space-x-6'>

      <TextField id="outlined-basic"
      onChange={(e) => setName(e.target.value)}
      value={name}
      label= 'Name'
      variant="outlined" />
    

    
      <TextField id="outlined-basic"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      label= 'Email'
      
      variant="outlined" />

    
      <Button 
      
      onClick={addData}
      style={{height: '53px'}}
      variant="contained" 
      color="success"
      >
        <AddIcon />
      </Button>
      
  </div>
  <div className='mt-7 w-full flex items-center flex-col'>
    <div className='flex w-1/2 items-center justify-between px-9 py-0 shadow-xl shadow-slate-300 text-3xl font-semibold'>
      <h3>Name</h3>
      <h3>Email</h3>
      <h3>Remove</h3>
    </div>

    {
    data.map((element, index) => {
      return(
        <Fields key={index} name = {element.name} email = {element.email} index = {index} />

      )
    })

    }
  </div>
    
  
    </div>
  )
}

export default App
