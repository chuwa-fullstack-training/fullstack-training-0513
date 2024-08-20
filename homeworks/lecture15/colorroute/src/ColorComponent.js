import React from 'react';
import { useParams } from 'react-router-dom';

const colors = ["white", "blue", "red", "orange", "lightblue", "antiquewhite", "cadetblue"];

const ColorComponent = ({ components, onNameChange, onColorChange }) => {
  const { id } = useParams();
  const component = components[parseInt(id, 10)];

  const handleNameChange = (event) => {
    onNameChange(component.id, event.target.value);
  };

  const handleColorChange = (event) => {
    onColorChange(component.id, event.target.value);
  };

  return (
    <div className="component-detail" style={{ backgroundColor: component.color }}>
      <label>
        Component name:
        <input
          type="text"
          value={component.name}
          onChange={handleNameChange}
          className="component-input"
        />
      </label>
      <label>
        Select color:
        <select value={component.color} onChange={handleColorChange} className="custom-select2">
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ColorComponent;
