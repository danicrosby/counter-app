import React, { useState } from 'react';

export default function Counter({ appName, initialValue }) {
  const [counter, setCounter] = useState(initialValue);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);

  return (
    <div className='App'>
      <input onChange={(e) => setCounterName(e.target.value)}></input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input onChange={(e) => setUserInput(Number(e.target.value))}></input><br />
      <button onClick={() => setCounter((prevState) => prevState + userInput)}>Increment By {userInput}</button>

      {counter <= 0 ? ''
        : <button onClick={() => setCounter((prevState) => prevState - userInput)}>Decrease By {userInput}</button>}

      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

//  <button onClick={() => setCounter((prevState) => prevState + 1)}>Increment By 1</button>

// counter <= 0 ? ''
//   : <button onClick={() => setCounter((prevState) => prevState - 1)}>Decrease By 1</button>}

// Props is the argument from the index.js page that is customized in the return statement

// destructure props with appName
