"use client"
import React, { useState } from "react";
import BoxSelector from "../../../component/hw2/BoxSelector";
import ColorSelector from "../../../component/hw2/ColorSelector"

type Box = {
  id: number;
  name: string;
  color: string;
};

const initialBoxs: Box[] = [
  { id: 1, name: 'first', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

const Hw2 = () => {
  const [boxs, setBoxs] = useState<Box[]>(initialBoxs);
  const [selectedBoxId, setSelectedBoxId] = useState<number>(1);

  const handleChangeName = (id: number, newName: string) => {
    setBoxs(boxs.map(box => box.id === id ? {...box, name: newName} : box));
  };
  const handleChangeColor = (newColor: string) => {
    setBoxs(boxs.map(box => box.id === selectedBoxId ? {...box, color: newColor} : box))
  };

  return (
    <>
      <div className="flex justify-around">
        <BoxSelector boxs={boxs} selectedBoxId={selectedBoxId} onSelect={setSelectedBoxId} />
        <ColorSelector onColorChange={handleChangeColor} />
      </div>

      <div className="grid grid-cols-3 gap-y-2 gap-x-8 mt-4">
        {boxs.map(box => (
          <label key={box.id} className="col-span-1 px-4 pt-4 pb-20 border-2 border-gray-300" style={{ backgroundColor: box.color }}>
            <p className="text-gray-500 font-normal">component name:</p>
            <input 
              type="text"
              value={box.name}
              onChange={(e) => handleChangeName(box.id, e.target.value)} 
              className="mt-2 rounded px-2 border-2 border-gray-300"
            />
          </label>
        ))}
      </div> 

    </>
  );
};

export default Hw2;