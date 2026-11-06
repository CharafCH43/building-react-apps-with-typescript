# Building React Apps with TypeScript — Checkpoint

## Objective

Convert the two supplied React JavaScript components to TypeScript, explain the steps, and provide well-commented code.

## 1. Code 01 — Greeting component

### Steps

1. Rename `Greeting.jsx` to `Greeting.tsx`. The `.tsx` extension allows TypeScript files to contain JSX.
2. Create the `GreetingProps` interface to describe the component's props.
3. Declare `name` as a `string`.
4. Apply `GreetingProps` to the component so TypeScript checks the value passed to `name`.
5. Keep the rendered greeting unchanged.

### Solution — `src/components/Greeting.tsx`

```tsx
import React from "react";

// Describes the props accepted by the Greeting component.
interface GreetingProps {
  name: string;
}

// The component accepts a name prop whose value must be a string.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

### Explanation

- `GreetingProps` defines the component's input contract.
- `name: string` means callers must provide a string for `name`.
- `React.FC<GreetingProps>` types the functional component and its props.
- `export default` allows the component to be imported elsewhere.

Example:

```tsx
<Greeting name="Alex" />
```

A value such as `<Greeting name={123} />` will produce a TypeScript type error.

## 2. Code 02 — Counter class component

### Steps

1. Rename `Counter.jsx` to `Counter.tsx`.
2. Define a `CounterState` interface for the component state.
3. Declare `count` as a `number`.
4. Pass the props and state types to `Component` using its generic parameters.
5. Type the initial state with `CounterState`.
6. Update the count using the functional form of `setState`, which reads the previous state safely.
7. Return the JSX from `render()`.

### Solution — `src/components/Counter.tsx`

```tsx
import React, { Component } from "react";

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
```

### Explanation

- `CounterState` defines the state structure.
- `count: number` restricts the counter value to numbers.
- `Component<{}, CounterState>` declares that this component has no props and uses `CounterState`.
- `state: CounterState` type-checks the initial state.
- `increment = (): void` indicates that the method returns no value.
- `setState((prevState) => ...)` calculates the next count from the previous state.

## 4. Run the project

```bash
npm install
npm run dev
```

## Conclusion

Both original components have been converted to TypeScript. Interfaces now describe the Greeting props and Counter state, and the code includes comments explaining the important decisions.
