import React, { Component } from 'react'

class Condition extends Component {
  state = {
 //   count: 0,
//we have an array of item    
    tags: []  
  };

  render() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;
    return (
      <div>
        <ul>
{/* and for rendering that we have list */}        
          {this.state.tags.map((tag) => (
            <ul key={tag}>{tag}</ul> 
           ))}
        </ul>
      </div>
    );
    }
}

export default Condition
