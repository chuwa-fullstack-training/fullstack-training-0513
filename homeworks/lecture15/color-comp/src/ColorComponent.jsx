import React, {useState, useEffect} from 'react';

function ColorComponent({ k, name, color, onNameChange, isSelected }) {
    const [inputValue, setInputValue] = useState(name);
    const [myColor, setMyColor] = useState("#ffffff");
    const handleChange = (e) => {
        setInputValue(e.target.value);
        onNameChange(e.target.value, k);
    };

    useEffect((
     () => {
        if (isSelected) {
            setMyColor(color);
        }
     }   
    ), [color, isSelected]);

    return (
        <div style={{ 
        border: '1px solid black', 
        margin: '10px', 
        padding: '10px', 
        backgroundColor: myColor, 
        flex: '1 0 30%' 
        }}>
        <div>Component name:</div>
        <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );

}

export default ColorComponent;