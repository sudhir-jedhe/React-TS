import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    const storedCount = localStorage.getItem("count");
    this.state = {
      count: storedCount ? parseInt(storedCount, 10) : 0,
    };
  }

  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2 data-testid="count-id">Count: {this.state.count}</h2>
        <button data-testid="inc-id" onClick={this.handleIncrement}>
          +
        </button>
        <button data-testid="dec-id" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
