import React from 'react';

const ComponentSelector = ({selectedComponent, components, setSelectedComponent}) => {
    return(
        <div className="component-selector">
            <label>Choose component :</label>
            <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
            >
                {Object.keys(components).map(id => (
                    <option key={id} value={id}>
                        {components[id].name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ComponentSelector;

