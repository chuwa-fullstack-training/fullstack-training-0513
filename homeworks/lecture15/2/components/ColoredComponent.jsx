import React from 'react';

const ColoredComponent = ({ id, name, color, onNameChange }) => {
    return (
        <div className="colored-component" style={{ backgroundColor: color }}>
            <label>Component name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(id, e.target.value)}
            />
        </div>
    );
};

export default ColoredComponent;
