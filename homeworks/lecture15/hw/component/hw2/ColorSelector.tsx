import React from 'react';

type ColorSelectorProps = {
  onColorChange: (color: string) => void;
};

const colorOptions = [
  'Select a color','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'grey' 
];

const ColorSelector: React.FC<ColorSelectorProps> = ({ onColorChange }) => {
  return (
    <select 
      onChange={(e) => onColorChange(e.target.value)}
      className="mt-4 bg-gray-400 border border-gray-200 rounded px-2 py-1 text-white w-1/3"
    >
      {colorOptions.map(color => (
        <option key={color} value={color}>{color}</option>
      ))}
    </select>
  );
};

export default ColorSelector;