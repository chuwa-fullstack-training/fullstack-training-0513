import React from "react";
import "./Hw2.css";

function Hw2() {
  const arr = new Array(20).fill(0).map((item, idx) => idx + 1);
  const handleClick = (i) => {
    alert(`Button ${i} is clicked`);
  };
  return (
    <div className="container">
      <nav>status bar</nav>
      <div className="button-container">
        {arr.map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hw2;
