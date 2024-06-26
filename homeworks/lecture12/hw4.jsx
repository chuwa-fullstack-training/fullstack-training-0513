import React, { useState } from 'react';
import './hw4.css';

const hw4 = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const value =  e.target.value;
        setInput(value);
        if (!isNaN(value) && value !== '') {
            setOutput(value + 'th');
        } else {
            setOutput(value);
        }
    };

    return(
        <div className='converter-container'>
            <input
                type='text'
                value={input}
                onChange={handleInputChange}
                className='input'
            />
            <div className="output">{output}</div>
        </div>
    );
};

export default hw4;
