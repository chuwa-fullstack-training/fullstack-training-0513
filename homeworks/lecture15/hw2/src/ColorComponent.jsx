import React from "react";
const ColorComponent = ({ item, onChange, index }) => {
  return (
    <div
      style={{
        border: "solid black 1px",
        margin: "10px",
        padding: "20px",
        paddingBottom: "100px",
        backgroundColor: item.color,
      }}
    >
      <p style={{ marginTop: 0 }}>Component name:</p>
      <input
        type="text"
        value={item.name}
        onChange={(e) => onChange(e, index)}
      />
    </div>
  );
};

export default ColorComponent;
