import React, { useState } from 'react';
import './App.css';

const colors = ["white", "blue", "red", "orange", "lightblue", "antiquewhite", "cadetblue"];
const names = ["aaron", "second", "third", "fourth", "fifth", "sixth"];

function App() {
  const [components, setComponents] = useState(
    names.map((name, idx) => ({ name: name, color: 'white', id: idx }))
  );
  const [selectedId, setSelectedId] = useState(0);
  const [selectedColor, setSelectedColor] = useState('white');

  const handleComponentChange = (event) => {
    const id = parseInt(event.target.value, 10);
    setSelectedId(id);
    setSelectedColor(components[id].color);
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    const newComponents = components.map((component) =>
      component.id === selectedId ? { ...component, color } : component
    );
    setComponents(newComponents);
  };

  const handleNameChange = (index, newName) => {
    const newComponents = [...components];
    newComponents[index].name = newName;
    setComponents(newComponents);
    if (newComponents[index].id === selectedId) {
      setSelectedId(index);
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <div className="btn-group">
          <label>
            <select value={selectedId} onChange={handleComponentChange} className="custom-select1">
              {components.map((component) => (
                <option key={component.id} value={component.id}>
                  {component.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <select value={selectedColor} onChange={handleColorChange} className="custom-select2">
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="components-grid">
        {components.map((component) => (
          <div
            key={component.id}
            className="component"
            style={{ backgroundColor: component.color }}
          >
            <label>
              Component name:
              <input
                type="text"
                value={component.name}
                onChange={(e) => handleNameChange(component.id, e.target.value)}
                className="component-input"/>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
