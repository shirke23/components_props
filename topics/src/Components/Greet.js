//greet file is to define functional component
import React from 'react'

//(defined functional component)
//function Greet() {
//   return (
//        <div>
//          <h1>hello welcome !</h1>  
//        </div>
//    )
//}
              //or
//defining functional component using arrow function
//props are defined
const Greet = props => {      //defined a prop
  console.log(props)
//props is used to display app.js component data    
  return (
    <div>  
      <h1>
        Hello {props.name} a.k.a {props.HeroName}
      </h1>
      {props.children}
    </div>  
  )   
}
export default Greet
