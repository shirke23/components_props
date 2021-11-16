//used for hoc
import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
//this is constructor and function      
    constructor(props){
      super(props);
      
      this.state = {
        count: 0  
      };
    } 

    incrementCount = () => {
     this.setState((prevState) => {
       return { count: prevState.count + 1 };  
      });  
    };


    render() {
      console.log(this.props.name);  
      return (
    //this is an original component where we render count      
        <OriginalComponent
          count={this.state.count} 
          incrementCount={this.incrementCount}
          {...this.props}
          />
       );
    }
}
return NewComponent;
};

export default UpdatedComponent;
