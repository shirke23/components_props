import React,{ useState } from 'react'
//functional component hook
function Hooks() {
  //state variable(count) initialize to zero
  //method setCount is used to change count variable  
    const [count, setCount] = useState(0)
    return (
      <div>
         <button onClick={() => setCount (count + 1)}> 
         Click {count} </button>   
      </div>
    )
}

export default Hooks
