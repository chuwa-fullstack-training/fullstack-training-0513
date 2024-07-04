import React from 'react';

function ComponentSelector({ components, selectedComponent, onComponentChange }) {
    return (
        <div>
            <select value={selectedComponent} onChange={onComponentChange}>
                {Object.keys(components).map(key => (
                    <option key={key} value={key}>
                        {components[key]}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default ComponentSelector;