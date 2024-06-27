import React from 'react';
import { useParams } from 'react-router-dom';

const ComponentView = ({ components, onNameChange }) => {
    const { id } = useParams();
    const component = components[id];

    if (!component) {
        return <div>Component not found</div>;
    }

    return (
        <div className="colored-component" style={{ backgroundColor: component.color }}>
            <label>Component name:</label>
            <input
                type="text"
                value={component.name}
                onChange={(e) => onNameChange(id, e.target.value)}
            />
        </div>
    );
};

export default ComponentView;
