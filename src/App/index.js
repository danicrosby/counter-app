import React, { useState } from 'react';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>Increment By 1</button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>Decrease By 1</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;
