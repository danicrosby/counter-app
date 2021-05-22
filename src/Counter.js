import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState('Counter');

  return (
    <div className='App'>
      <input onChange={(e) => setCounterName(e.target.value)}></input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>

      <input onChange={(e) => setUserInput(Number(e.target.value))}></input><br />

      {/* <button onClick={() => setCounter((prevState) => prevState + 1)}>Increment By 1</button> */}
      <button onClick={() => setCounter((prevState) => prevState + userInput)}>Increment By {userInput}</button>

      {/* {counter <= 0 ? ''
        : <button onClick={() => setCounter((prevState) => prevState - 1)}>Decrease By 1</button>} */}
      {counter <= 0 ? ''
        : <button onClick={() => setCounter((prevState) => prevState - userInput)}>Decrease By {userInput}</button>}

      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
