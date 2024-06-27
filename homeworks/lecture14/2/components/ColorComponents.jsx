import React, { useState } from 'react';
import ComponentSelector from './ComponentSelector';
import ColorSelector from './ColorSelector';
import ColoredComponent from './ColoredComponent';
import './ColorComponents.css';

const ColorComponents = () => {
    const [selectedComponent, setSelectedComponent] = useState('component1');
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [components, setComponents] = useState({
        component1: { name: 'Component 1', color: '#ffffff' },
        component2: { name: 'Component 2', color: '#ffffff' },
        component3: { name: 'Component 3', color: '#ffffff' },
        component4: { name: 'Component 4', color: '#ffffff' },
        component5: { name: 'Component 5', color: '#ffffff' },
        component6: { name: 'Component 6', color: '#ffffff' },
    });

    const handleNameChange = (id, newName) => {
        setComponents(prevComponents => ({
            ...prevComponents,
            [id]: { ...prevComponents[id], name: newName }
        }));
    };

    const handleColorChange = (newColor) => {
        setSelectedColor(newColor);
        setComponents(prevComponents => ({
            ...prevComponents,
            [selectedComponent]: { ...prevComponents[selectedComponent], color: newColor }
        }));
    };

    return (
        <div className="color-components">
            <ComponentSelector
                selectedComponent={selectedComponent}
                components={components}
                setSelectedComponent={setSelectedComponent}
            />
            <ColorSelector selectedColor={selectedColor} setSelectedColor={handleColorChange} />
            <div className="components-grid">
                {Object.keys(components).map(id => (
                    <ColoredComponent
                        key={id}
                        id={id}
                        name={components[id].name}
                        color={components[id].color}
                        onNameChange={handleNameChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default ColorComponents;
