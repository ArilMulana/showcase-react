import React from 'react';

interface GreetingProps {
  name: string;
}

const App: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}! Welcome to React + TypeScript</h1>;
};

export default App;
