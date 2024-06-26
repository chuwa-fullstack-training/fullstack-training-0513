import React from 'react';
import './PhoneLayout.css';

const PhoneLayout = () => {
  const handleClick = (number) => {
    alert(`Button ${number} clicked`);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 20; i++) {
      buttons.push(
        <button key={i} className="phone-button" onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="phone-container">
      <div className="status-bar">status bar</div>
      <div className="button-panel">
        {renderButtons()}
        <div className="transparent-overlay"></div>
      </div>
    </div>
  );
};

export default PhoneLayout;
