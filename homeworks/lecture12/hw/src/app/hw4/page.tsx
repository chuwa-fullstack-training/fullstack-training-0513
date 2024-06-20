"use client"
import React, { useState } from "react";

const getNumInStr = (num: number) => {
  let j = num % 10;
  if (j === 1) {
    return `${num}st`;
  }
  if (j === 2) {
    return `${num}nd`;
  }
  if (j === 3) {
    return `${num}rd`;
  }
  return `${num}th`;
};

const Hw4 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResult = () => {
    const numValue = Number(inputValue);
    if (isNaN(numValue)) {
      return inputValue;
    }
    return getNumInStr(numValue);
  };

  return(
    <>
      <div className="mt-4 w-full flex">
        <label className="block mb-2 mr-2">
          <input
            type="text"
            placeholder="Provide your input"
            value={inputValue}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </label>
        <label className="block mb-2">
          <input
            type="text"
            value={getResult()}
            readOnly
            className="border border-gray-300 p-2 rounded w-full bg-gray-100"
          />
        </label>
      </div>
    </>
  );
};

export default Hw4;