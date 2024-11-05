import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <>
    <div>
       <TextField id="outlined-basic" 
       value={username}
       label="Username"
       onChange={(e) => setUsername(e.target.value)}
       variant="outlined" />

       <TextField 
       style={{marginLeft: '20px'}}
       id="outlined-basic" 
       value={password}
       label="Password"
       onChange={(e) => setPassword(e.target.value)}
       variant="outlined" />

      <Button
      
      style={{height: '55px', borderRadius: '10px', left: '20px'}} 
      onClick={handleSubmit}
      variant="contained"
      color="success">
        Submit
      </Button>
          
      </div>
    
    </>
  )
}

export default Login
