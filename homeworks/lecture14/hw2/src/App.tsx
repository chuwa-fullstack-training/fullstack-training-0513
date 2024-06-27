import { useState } from 'react';
import './App.css';
import ComponentList from './ComponentList';
import ColorComponent from './ColorComponent';

const initialComponents = [
  { id: 1, name: 'first', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

function App() {
  const [components, setComponents] = useState(initialComponents);
  const [selectedComponent, setSelectedComponent] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('white');

  const handleComponentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(Number(event.target.value));
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleNameChange = (id: number, newName: string) => {
    setComponents(components.map(comp => 
      comp.id === id ? { ...comp, name: newName } : comp
    ));
  };



  return (
    <>
      <div className="controls">
        <select value={selectedComponent} onChange={handleComponentChange}>
          {components.map(comp => (
            <option key={comp.id} value={comp.id}>{comp.name}</option>
          ))}
        </select>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="white">White</option>
          <option value="lightcoral">Light Coral</option>
          <option value="lightblue">Light Blue</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightyellow">Light Yellow</option>
        </select>
      </div>
      <div className="component-list">
        {components.map(comp => (
          <ColorComponent 
            key={comp.id} 
            component={comp} 
            isSelected={comp.id === selectedComponent}
            selectedColor={selectedColor}
            onNameChange={handleNameChange}
          />
        ))}
      </div>
    </>
  )
}

export default App
