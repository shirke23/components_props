import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {" "}
          {this.props.name} click {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
