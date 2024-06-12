import {useState} from "react";


function Hw3() {
  const [count, setCount] = useState(0);

  const addValue = (n) => {
    setCount(val => val + n);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="hw3">
      <div className="operation">
        <button onClick={() => addValue(1)}>+1</button>
        <button onClick={() => addValue(10)}>+10</button>
        <button onClick={() => addValue(100)}>+100</button>
        <button onClick={() => addValue(1000)}>+1000</button>
        <button onClick={reset}>Reset</button>
      </div>
      <h2>{count}</h2>
    </div>
  )
}

export default Hw3
