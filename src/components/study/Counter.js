import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <Button onClick={this.handleIncrease}>+</Button>
        <Button onClick={this.handleDecrease}>-</Button>
      </div>
    );
  }
}

export default Counter;