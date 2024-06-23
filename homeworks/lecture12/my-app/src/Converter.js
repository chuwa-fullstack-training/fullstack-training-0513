import React, { useState } from 'react';

const Converter = () => {
  const [number, setNumber] = useState('');
  const [ordinal, setOrdinal] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (!isNaN(value) && value.trim() !== '') {
      setOrdinal(toOrdinal(value));
    } else {
      setOrdinal(value);
    }
  }

  const toOrdinal = (n) => {
    if (!n) {
      return '';
    }
    const lastDigit = n % 10;
    const lastTwoDigits = n % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${n}th`;
    }
    switch (lastDigit) {
      case 1:
        return `${n}st`;
      case 2:
        return `${n}nd`;
      case 3:
        return `${n}rd`;
      default:
        return `${n}th`;
    }
  };

  return (
    <div> 
      <input type="text" value={number} onChange={handleChange} placeholder="Provide your input" />
      <input type="text" value={ordinal} readOnly placeholder="Ordinal result" />

    </div>
  );
};

export default Converter;