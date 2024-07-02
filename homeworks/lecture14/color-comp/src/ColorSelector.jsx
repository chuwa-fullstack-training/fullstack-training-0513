import React from 'react';

function ColorSelector({ color, onColorChange }) {

    return (
        <div>
            <input type="color" value={color} onChange={onColorChange} />
        </div>
    )
}

export default ColorSelector;