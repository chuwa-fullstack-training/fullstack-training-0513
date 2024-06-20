"use client"
import React, { useState } from "react";

const Hw2 = () => {
  const [text, setText] = useState("status bar")
  const buttons1 = Array.from({ length: 16 }, (_, i) => `${i + 1}`);
  const buttons2 = Array.from({ length: 4 }, (_, i) => `${i + 1}`);

  const handleClick = (text) => {
    setText(text);
  };

  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="flex border-2 border-gray-600 w-[300px] h-[580px] rounded-[36px]">
          <div className="m-auto w-[270px] h-[420px] border-2 border-gray-600">
            <div className="flex bg-blue-600/80 border border-dashed border-red-200 h-10%">
              <p className="m-auto text-lg font-bold mx-auto">{text}</p>
            </div>
            
            <section className="flex bg-blue-600/80 h-70%">
              <div className="grid grid-cols-4 gap-x-5 gap-y-6 my-4 mx-auto">
                {buttons1.map((text, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleClick(index + 1)}
                    className="bg-white rounded-lg w-12 h-12 text-3xl font-bold"
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </section>

            <div className="flex bg-blue-600/70 h-1/5">
              <div className="grid grid-cols-4 gap-x-5 gap-y-6 m-auto">
                {buttons2.map((text, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleClick(index + 17)}
                    className="bg-white rounded-lg w-12 h-12 text-3xl font-bold"
                  >
                    {index + 17}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hw2;