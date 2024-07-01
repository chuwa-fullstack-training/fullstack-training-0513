// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [components, setComponents] = useState([
//     { id: 1, name: 'aaron', color: '#FFFFFF' },
//     { id: 2, name: 'second', color: '#FFFFFF' },
//     { id: 3, name: 'third', color: '#FFFFFF' },
//     { id: 4, name: 'fourth', color: '#FFFFFF' },
//     { id: 5, name: 'fifth', color: '#FFFFFF' },
//     { id: 6, name: 'sixth', color: '#FFFFFF' }
//   ]);
//   const [selectedComponent, setSelectedComponent] = useState(components[0].id);
//   const [selectedColor, setSelectedColor] = useState('#FFFFFF');

//   const handleComponentChange = event => {
//     const id = parseInt(event.target.value, 10);
//     setSelectedComponent(id);
//   };

//   const handleColorChange = event => {
//     setSelectedColor(event.target.value);
//     const updatedComponents = components.map(comp => 
//       comp.id === selectedComponent ? { ...comp, color: event.target.value } : comp
//     );
//     setComponents(updatedComponents);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <select value={selectedComponent} onChange={handleComponentChange}>
//           {components.map(comp => (
//             <option key={comp.id} value={comp.id}>{comp.name}</option>
//           ))}
//         </select>
//         <input type="color" value={selectedColor} onChange={handleColorChange} />
//         {components.map(comp => (
//           <div key={comp.id} style={{ backgroundColor: comp.color, padding: '10px', margin: '5px' }}>
//             Component name: {comp.name}
//           </div>
//         ))}
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const initialComponents = [
    { id: 1, name: 'aaron', color: '#FFFFFF' },
    { id: 2, name: 'second', color: '#FFFFFF' },
    { id: 3, name: 'third', color: '#FFFFFF' },
    { id: 4, name: 'fourth', color: '#FFFFFF' },
    { id: 5, name: 'fifth', color: '#FFFFFF' },
    { id: 6, name: 'sixth', color: '#FFFFFF' }
  ];

  const [components, setComponents] = useState(initialComponents);
  const [selectedComponentId, setSelectedComponentId] = useState(components[0].id);

  const handleComponentSelectionChange = (event) => {
    setSelectedComponentId(parseInt(event.target.value, 10));
  };

  const handleColorChange = (color) => {
    const updatedComponents = components.map(comp => 
      comp.id === selectedComponentId ? { ...comp, color: color } : comp
    );
    setComponents(updatedComponents);
  };

  const selectedComponent = components.find(comp => comp.id === selectedComponentId);

  return (
    <div className="App">
      <div>
        <select value={selectedComponentId} onChange={handleComponentSelectionChange}>
          {components.map(comp => (
            <option key={comp.id} value={comp.id}>{comp.name}</option>
          ))}
        </select>
        <input 
          type="color" 
          value={selectedComponent.color} 
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      {components.map(comp => (
        <div key={comp.id} style={{ backgroundColor: comp.color, padding: '10px', margin: '5px' }}>
          Component name: {comp.name}
        </div>
      ))}
    </div>
  );
}

export default App;
