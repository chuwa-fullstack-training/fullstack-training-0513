"use client"
import React, { useState } from "react";

const Hw3 = () => {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="relative">
        <button className="p-2 rounded bg-blue-300 mr-4" onClick={() => increment(1)}>+1</button>
        <button className="p-2 rounded bg-blue-300 mr-4" onClick={() => increment(10)}>+10</button>
        <button className="p-2 rounded bg-blue-300 mr-4" onClick={() => increment(100)}>+100</button>
        <button className="p-2 rounded bg-blue-300 mr-4"onClick={() => increment(1000)}>+1000</button>
      </div>
      <p className="mt-8">{count}</p>
      <button className="p-2 rounded bg-blue-300 mt-8" onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default Hw3;