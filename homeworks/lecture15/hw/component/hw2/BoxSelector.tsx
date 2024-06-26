import React from 'react';

type BoxSelectorProps = {
  boxs: { id: number, name: string }[];
  selectedBoxId: number | null;
  onSelect: (id: number) => void;
};

const BoxSelector: React.FC<BoxSelectorProps> = ({ boxs, selectedBoxId, onSelect }) => {
  return (
    <select value={selectedBoxId || ""} onChange={(e) => onSelect(Number(e.target.value))} className="mt-4 bg-gray-400 border border-gray-200 rounded px-2 py-1 text-white w-1/3">
      <option value="" disabled>Select a box</option>
      {boxs.map(box => (
        <option key={box.id} value={box.id}>
          {box.name}
        </option>
      ))}
    </select>
  );
};

export default BoxSelector;