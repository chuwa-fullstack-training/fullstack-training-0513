"use client"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxSelector from "../../../component/hw2/BoxSelector";
import ColorSelector from "../../../component/hw2/ColorSelector";
import { useBoxContext } from '../../../component/hw2/BoxContext';

const Hw2: React.FC = () => {
  const { boxs, setBoxs } = useBoxContext();
  const [selectedBoxId, setSelectedBoxId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChangeColor = (newColor: string) => {
    if (selectedBoxId !== null) {
      setBoxs(boxs.map(box => box.id === selectedBoxId ? { ...box, color: newColor } : box));
    } else {
      alert("Please select a box first.");
    }
  };

  const handleBoxSelect = (id: number) => {
    setSelectedBoxId(id);
  };

  const handleNavigate = () => {
    if (selectedBoxId !== null) {
      navigate(`/hw2/${selectedBoxId}`);
    } else {
      alert("Please select a box first.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <BoxSelector boxs={boxs} selectedBoxId={selectedBoxId ?? 0} onSelect={handleBoxSelect} />
      <ColorSelector onColorChange={handleChangeColor} />
      <button 
        onClick={handleNavigate} 
        className="mt-8 bg-gray-500 border border-gray-200 rounded px-2 py-1 text-white w-fit"
      >
        Go to Box Details
      </button>
    </div>
  );
};

export default Hw2;