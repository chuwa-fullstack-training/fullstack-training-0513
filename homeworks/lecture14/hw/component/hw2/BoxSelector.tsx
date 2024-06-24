import React, { useState } from "react";

type Box = {
  id: number;
  name: string;
  color: string;
};

type BoxSelectorProps = {
  boxs: Box[],
  selectedBoxId: number;
  onSelect: (id: number) => void;
};

const BoxSelector: React.FC<BoxSelectorProps> = ({boxs, selectedBoxId, onSelect}) => {
  return (
    <>
      <select
        value={selectedBoxId}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="bg-gray-800 border border-gray-200 rounded px-2 text-white"
      >
        {boxs.map(box => (
          <option key={box.id} value={box.id}>{box.name}</option>
        ))}
      </select>
    </>
  );
};

export default BoxSelector;