import React, { Component } from 'react'

class Message extends Component {
  // constructor is use to initialized object 
  constructor(){
    super()
  //created a state object
    this.state = {
      message: 'Welcome visitor'  
    }
  }

  changeMessage() {
    // setState is used to change state of veriable in class component 
      this.setState({
           message: 'Thank you for subscribing'
      })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>    {/* state object is used here */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message
