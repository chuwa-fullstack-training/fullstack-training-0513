import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ColorComponent from './ColorComponent';

const names = ["aaron", "second", "third", "fourth", "fifth", "sixth"];

function App() {
  const [components, setComponents] = useState(
    names.map((name, idx) => ({ name: name, color: 'white', id: idx }))
  );

  const handleNameChange = (index, newName) => {
    const newComponents = [...components];
    newComponents[index].name = newName;
    setComponents(newComponents);
  };

  const handleColorChange = (index, newColor) => {
    const newComponents = [...components];
    newComponents[index].color = newColor;
    setComponents(newComponents);
  };

  return (
    <Router>
      <div className="App">
        <div className="components-grid">
          {components.map((component) => (
            <div
              key={component.id}
              className="component"
              style={{ backgroundColor: component.color }}
            >
              <Link to={`/component/${component.id}`}>
                {component.name}
              </Link>
            </div>
          ))}
        </div>
        <Routes>
          <Route path="/component/:id" element={<ColorComponent components={components} onNameChange={handleNameChange} onColorChange={handleColorChange} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
