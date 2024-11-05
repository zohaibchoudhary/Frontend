import React, { useEffect, useRef, forwardRef } from 'react'

function Search(props, ref) {

  return (
    <>
      <input  
      ref={ref}
      type="text" 
      placeholder='Search...'
      style={
        {display: "block", margin: "2rem 2rem", padding: "0.5rem 1.125rem"}
      } />
    </>
  )
}

export default forwardRef(Search)
