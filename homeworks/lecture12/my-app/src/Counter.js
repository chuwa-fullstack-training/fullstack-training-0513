import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount(count + value);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="buttons-container">
        <div className="buttons">
          <button onClick={() => increment(1)}>+1</button>
          <button onClick={() => increment(10)}>+10</button>
          <button onClick={() => increment(100)}>+100</button>
          <button onClick={() => increment(1000)}>+1000</button>
        </div>
        <h1>{count}</h1>
      </div>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;