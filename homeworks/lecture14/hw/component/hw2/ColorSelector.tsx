import React from 'react';

type ColorSelectorProps = {
  onColorChange: (color: string) => void;
};

const colorOptions = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'grey' 
];

const ColorSelector: React.FC<ColorSelectorProps> = ({ onColorChange }) => {
  return (
    <>
      <select 
        onChange={(e) => onColorChange(e.target.value)}
        className="bg-gray-800 border border-gray-200 rounded px-2 text-white"
      >
        {colorOptions.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </>
  );
};

export default ColorSelector;