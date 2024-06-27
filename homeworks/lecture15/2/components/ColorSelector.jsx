import React from 'react';

const ColorSelector = ({ selectedColor, setSelectedColor }) => {
    const colors = [
        { name: 'White', value: '#ffffff' },
        { name: 'Red', value: '#ff0000' },
        { name: 'Green', value: '#00ff00' },
        { name: 'Blue', value: '#0000ff' },
        { name: 'Yellow', value: '#ffff00' },
        { name: 'Magenta', value: '#ff00ff' },
        { name: 'Cyan', value: '#00ffff' },
        { name: 'Black', value: '#000000' },
        { name: 'Gray', value: '#808080' },
        { name: 'Maroon', value: '#800000' }
    ];

    return (
        <div className="color-selector">
            <label>Choose color:</label>
            <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
            >
                {colors.map(color => (
                    <option key={color.value} value={color.value}>
                        {color.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ColorSelector;
