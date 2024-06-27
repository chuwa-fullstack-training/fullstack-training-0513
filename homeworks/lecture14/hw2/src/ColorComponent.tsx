import React, { useState } from 'react';
import './ColorComponent.css';

interface ColorComponentProps {
  component: { id: number, name: string, color: string };
  isSelected: boolean;
  selectedColor: string;
  onNameChange: (id: number, newName: string) => void;
}

const ColorComponent: React.FC<ColorComponentProps> = ({ component, isSelected, selectedColor, onNameChange }) => {
  const [name, setName] = useState(component.name);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    onNameChange(component.id, event.target.value);
  };

  return (
    <div className={`color-component ${isSelected ? 'selected' : ''}`} style={{ backgroundColor: isSelected ? selectedColor : component.color }}>
      <label>Component name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default ColorComponent;
