import React, { useState } from "react";
import ColorComponent from "./ColorComponent";

const Hw2 = ({ items, handleChange }) => {
  return (
    <div className="container">
      <div className="items-container">
        {items.map((item, index) => (
          <ColorComponent
            item={item}
            key={index}
            onChange={handleChange}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Hw2;
