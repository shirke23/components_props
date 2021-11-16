import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

export class HowerCounter extends Component {
  

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>hower {count} times</h2>
      </div>
    );
  }
}

export default UpdatedComponent(HowerCounter);
