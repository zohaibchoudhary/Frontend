// import { useImmer } from 'use-immer';
// import CountLabel from './CountLabel'

// export default function Form() {
  //   const [person, updatePerson] = useImmer({
    //     name: 'Niki de Saint Phalle',
//     artwork: {
  //       title: 'Blue Nana',
  //       city: 'Hamburg',
  //       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     // updatePerson({
//     //   ...person,
//     //   name: e.target.value
//     // }
//     // )
//     updatePerson(draft => {
//       draft.name = e.target.value
//     })
    
//   }

//   function handleTitleChange(e) {
//     // updatePerson({
//     //   ...person,
//     //   artwork: {
//     //     ...person.artwork,
//     //     title: e.target.value 
//     //   }
//     // })

//     updatePerson(draft => {
//       draft.artwork.title = e.target.value;
//     });
//   }

//   function handleCityChange(e) {
//     updatePerson(draft => {
//       draft.artwork.city = e.target.value;
//     });
//   }

//   function handleImageChange(e) {
//     updatePerson(draft => {
//       draft.artwork.image = e.target.value;
//     });
//   }


// <>
//   <label>
//     Name:
//     <input
//       value={person.name}
//       onChange={handleNameChange}
//     />
//   </label>
//   <label>
//     Title:
//     <input
//       value={person.artwork.title}
//       onChange={handleTitleChange}
//     />
//   </label>
//   <label>
//     City:
//     <input
//       value={person.artwork.city}
//       onChange={handleCityChange}
//     />
//   </label>
//   <label>
//     Image:
//     <input
//       value={person.artwork.image}
//       onChange={handleImageChange}
//     />
//   </label>
//   <p>
//     <i>{person.artwork.title}</i>
//     {' by '}
//     {person.name}
//     <br />
//     (located in {person.artwork.city})
//   </p>
//   <img 
//     src={person.artwork.image} 
//     alt={person.artwork.title}
//   />
// </>

// export default function App () {

//   const [count, setCount] = useState(0)
//   return (

//     <>
//     <button 
//     onClick = {() => {
//       setCount(count + 1)
//     }}
//     >Increment</button>
//     <button 
//     onClick = {() => {
//       setCount(count - 1)
//     }}
//     >Decrement</button>
    
//     <CountLabel count={count} />
    
   
//     </>
//   ) 


// }

import { useState , useEffect } from 'react'
import './index.css'

export default function App() {
  return(
    <>
    <h1 className='text-center text-4xl bg-orange-500'>Arham</h1>

  
    </>
  )
}