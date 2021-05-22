import React from 'react';
import './App.scss';
import Counter from '../Counter';

function App() {
  const array = [
    {
      appName: 'Counter 1',
      initialValue: 200
    },
    {
      appName: 'Counter 2',
      initialValue: 0
    },
    {
      appName: 'Counter 3',
      initialValue: 100
    },
  ];

  return (
    <div>
      { array.map((counter, i) => <Counter
        key={i}
        appName={counter.appName}
        initialValue={counter.initialValue}/>)
      }
    </div>
  );
}

export default App;

// Props are arguemnts: you can customize each Counter component called
// To call you have to pass it a prop/argument
