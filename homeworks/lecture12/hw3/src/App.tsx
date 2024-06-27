import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount(count + value);
  };

  const reset = () => {
    setCount(0);
  };
      
  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="buttons-container">
        <button onClick={() => increment(1)}>Increment by 1</button>
        <button onClick={() => increment(10)}>Increment by 10</button>
        <button onClick={() => increment(100)}>Increment by 100</button>
        <button onClick={() => increment(1000)}>Increment by 1000</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
