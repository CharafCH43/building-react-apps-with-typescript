import React, { Component } from 'react';

// Describes the shape of the Counter component's state.
interface CounterState {
  count: number;
}

// The first generic parameter is the props type ({} means no props).
// The second generic parameter is the state type.
class Counter extends Component<{}, CounterState> {
  // Initialize the state and ensure it matches CounterState.
  state: CounterState = {
    count: 0,
  };

  // Increase the count by one. This method does not return a value.
  increment = (): void => {
    // Use the previous state to avoid relying on a potentially stale value.
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Render the current count and the button.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
