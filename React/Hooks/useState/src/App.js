import { useState } from "react";
import "./App.css";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

function App() {
	// const [text, setText] = useState('Zohaib');

	// function increase(e){
	//   setText(e.target.value)
	// }

	// function decrease(){
	//   setValue(value - 2)
	// }

	// const[liked, setLiked] = useState(false)

	// function click(e){
	//    setLiked(e.target.checked)
	// }

	// const [age, setAge]  = useState(19)
	// function increment() {
	//   setAge(age + 1)
	//   setAge(a => a + 1)
	// }

	const [position, setPosition] = useState({ x: 0, y: 0 });

	// const [form, setForm] = useState({
	//   firstName : 'Zohaib',
	//   lastName : 'Ali',
	//   email : 'zohaibali@gmail.com'
	// });

	return (
		<>
			{/* <div style={{textAlign: 'center', marginTop: '200px', }}> */}

			{/* <input type="checkbox"
   onChange={click}
   />
   I like this */}

			{/* <TextField 
   onChange={increase}
   value={text}
   
   id="outlined-basic"  variant="outlined" />
  <div  style={{marginTop: '20px'}}> */}
			{/* <h2>Your age is { age }</h2> */}
			{/* <Button 
  style={{margin: '8px'}}
  // onClick={(e) => setText('')}
  // onClick={() => {    
  //   increment()
  //   increment()
  //   increment()
  // }}
  variant="contained">+3</Button> */}

			{/* <Button
  // onClick={decrease}
  // onClick={increment}
  variant="contained">+1</Button> */}
			{/* </div>

</div>  */}

			{/* <p>You {liked? 'like this.' : ' did not like this. ' }</p> */}

			{/* </div> */}

			<div
				onPointerMove={(e) => {
					setPosition({
						x: e.clientX,
						y: e.clientY,
					});
				}}
				style={{
          position: "relative",
          backgroundColor: "black",
          height: "95vh",
          width: "100vw"
				}}
			>
				<div
					style={{
						backgroundColor: "red",
						position: "absolute",
						borderRadius: "50%",
						transform: `translate(${position.x}px, ${position.y}px)`,
						top: "-10px",
						left: "-10px",
            height: "5vh",
            width: "5vh"
					}}
				></div>
			</div>

			{/* <div style={{textAlign: 'center', marginTop: '200px'}}>

  <div>
    <label>First Name</label>
    <input 
    value={form.firstName}
    onChange={(e) => {
      setForm({
        ...form, 
        firstName : e.target.value
        
      })
    }}
    type="text" />
   </div>
   <br/>
   <div>

    <label>Last Name</label>
    <input
    value={form.lastName}
        onChange={(e) => {
          setForm({
            ...form, 
            lastName : e.target.value
            
          })
        }} 
        type="text" />

   </div>
    <br/>

  <div>
    
    <label>Email</label>
    <input 
    value={form.email}
    onChange={(e) => {
      setForm({
        ...form, 
        email : e.target.value
        
      })
    }}
    type="text" />

  </div>
<p>{form.firstName} {form.lastName} </p>
<p>{form.email}</p>
</div> */}
		</>
	);
}

export default App;
