import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ColorComponent.css';

interface Component {
  id: number;
  name: string;
  color: string;
}

const initialComponents: Component[] = [
  { id: 1, name: 'aaron', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

const ColorComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [components, setComponents] = useState(initialComponents);
  const [selectedColor, setSelectedColor] = useState('white');
  const [component, setComponent] = useState<Component | null>(null);

  useEffect(() => {
    const foundComponent = components.find(comp => comp.id === parseInt(id, 10));
    if (foundComponent) {
      setComponent(foundComponent);
    }
  }, [id, components]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (component) {
      const newName = event.target.value;
      setComponent({ ...component, name: newName });
      setComponents(components.map(comp => comp.id === component.id ? { ...comp, name: newName } : comp));
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="color-component" style={{ backgroundColor: selectedColor }}>
      {component && (
        <>
          <label>Component name:</label>
          <input type="text" value={component.name} onChange={handleNameChange} />
          <br />
          <label>Choose color:</label>
          <select value={selectedColor} onChange={handleColorChange}>
            <option value="white">White</option>
            <option value="lightcoral">Light Coral</option>
            <option value="lightblue">Light Blue</option>
            <option value="lightgreen">Light Green</option>
            <option value="lightyellow">Light Yellow</option>
          </select>
        </>
      )}
    </div>
  );
};

export default ColorComponent;
