import React from 'react';
import './PhoneLayout.css';

const Hw2 = () => {
  const handleClick = (number) => {
    alert(`Button ${number} clicked`);
  };

  return (
    <div className="phone-container">
      <div className="status-bar">status bar</div>
      <div className="buttons-grid">
        {[...Array(20)].map((_, i) => (
          <button key={i} onClick={() => handleClick(i + 1)} className="button">
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hw2;
