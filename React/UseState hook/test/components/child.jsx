import React from 'react'

function Child({handleCountChange}) {
  return (
    <div>
      {
        console.log("Child component renders")
      }
      <button onClick={handleCountChange}>Increase Count</button>
    </div>
  )
}

export default React.memo(Child)