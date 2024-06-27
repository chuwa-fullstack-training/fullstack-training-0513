import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentSelector from './ComponentSelector';
import ColorSelector from './ColorSelector';
import './ColorComponents.css';

const ColorComponents = ({ components, setComponents }) => {
    const [selectedComponent, setSelectedComponent] = React.useState('component1');
    const [selectedColor, setSelectedColor] = React.useState('#ffffff');
    const navigate = useNavigate();

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

    const handleComponentClick = (id, event) => {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'LABEL') {
            navigate(`/component/${id}`);
        }
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
                    <div
                        key={id}
                        className="colored-component"
                        style={{ backgroundColor: components[id].color }}
                        onClick={(e) => handleComponentClick(id, e)}
                    >
                        <label>Component name:</label>
                        <input
                            type="text"
                            value={components[id].name}
                            onChange={(e) => handleNameChange(id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorComponents;
