import React, { useState } from 'react';
import './Converter.css';

const Converter: React.FC = () => {
  const [number, setNumber] = useState('');
  const [ordinal, setOrdinal] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
      setOrdinal(convertToOrdinal(Number(value)));
    }
  };

  const convertToOrdinal = (num: number): string => {
    if (num === 0) return '0';
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = num % 100;
    return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
  };

  return (
    <div className="converter-container">
      <input 
        type="text"
        value={number}
        onChange={handleChange}
        className="number-input"
        placeholder="Enter number"
      />
      <input 
        type="text"
        value={ordinal}
        readOnly
        className="ordinal-output"
        placeholder="Ordinal form"
      />
    </div>
  );
};

export default Converter;
