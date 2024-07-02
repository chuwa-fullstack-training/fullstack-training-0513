import './App.css';
import React, { useState } from 'react';
import ColorComponent from './ColorComponent';
import ColorSelector from './ColorSelector';
import ComponentSelector from './ComponentSelector';

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
    <div>
      <ComponentSelector components={components} selectedComponent={selectedComponent} onComponentChange={handleComponentChange}/>
      <ColorSelector color={color} onColorChange={handleColorChange}/>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(components).map(item => (
            <ColorComponent 
              key={item}
              k={item}
              name={components[item]}
              color={item===selectedComponent?color:'#ffffff'}
              onNameChange={handleNameChange}
              isSelected={item===selectedComponent}
            />
        ))
        }
      </div>
    </div>
  );



};

export default App;
