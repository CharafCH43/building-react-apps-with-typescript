import React from 'react';

// Describes the props accepted by the Greeting component.
interface GreetingProps {
  name: string;
}

// The component accepts a name prop whose value must be a string.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
