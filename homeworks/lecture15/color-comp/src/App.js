import './App.css';
import React, { useState } from 'react';
import ColorComponent from './ColorComponent';
import ColorSelector from './ColorSelector';
import ComponentSelector from './ComponentSelector';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('first');
  const [color, setColor] = useState('#ffffff');
  const [components, setComponents] = useState({
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: 'fourth',
    fifth: 'fifth',
    sixth: 'sixth'
  });

const handleComponentChange = (e) => {
  setSelectedComponent(e.target.value);
  // clear color selector
  setColor("#ffffff");
}

const handleColorChange = (e) => {
  setColor(e.target.value);
}

const handleNameChange = (name, key) => {
  setComponents((prev) => ({...prev, [key]:name}));
  console.log(key);
}

  return (
    <Router>
      <div>
        <ComponentSelector
          components={components}
          selectedComponent={selectedComponent}
          onComponentChange={handleComponentChange}
        />
        <ColorSelector color={color} onColorChange={handleColorChange} />
        <Routes>
          {Object.keys(components).map((key) => (
            <Route key={key} path={`/${key}`} element={
              <ColorComponent
                name={components[key]}
                color={selectedComponent === key ? color : '#ffffff'}
                onNameChange={handleNameChange}
                isSelected={selectedComponent === key}
              />
            } />
          ))}
        </Routes>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(components).map((key) => (
          <Link key={key} to={`/${key}`} style={{ margin: '10px' }}>
            <div
              style={{
                border: '1px solid black',
                padding: '10px',
                backgroundColor: selectedComponent === key ? color : '#ffffff',
              }}
            >
              {components[key]}
            </div>
          </Link>
        ))}
      </div>
    </Router>
  );
};





export default App;
