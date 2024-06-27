import React, { useState } from "react";
import "./Hw2.css";

const Controller1 = ({ items, onSelect }) => {
  return (
    <select name="name" id="name" onChange={(e) => onSelect(+e.target.value)}>
      <option value="-1">wei</option>
      {items.map((item, index) => (
        <option key={index} value={index}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
const Controller2 = ({ onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="dummy">Choose a color</option>
      <option value="antiquewhite">antiquewhite</option>
      <option value="azure">azure</option>
      <option value="blueviolet">blueviolet</option>
      <option value="chocolate">chocolate</option>
      <option value="comflowerblue">comflowerblue</option>
      <option value="crimson">crimson</option>
      <option value="dodgerblue">dodgerblue</option>
      <option value="forestgreen">forestgreen</option>
      <option value="navy">navy</option>
    </select>
  );
};
const Hw2 = () => {
  const [items, setItems] = useState([
    { name: "first", color: "white" },
    { name: "second", color: "white" },
    { name: "third", color: "white" },
    { name: "fourth", color: "white" },
    { name: "fifth", color: "white" },
    { name: "sixth", color: "white" },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectName = (index) => {
    setSelectedIndex(index);
  };

  const handleSelectColor = (color) => {
    const newItems = [...items];
    if (selectedIndex < 0) return;
    newItems[selectedIndex].color = color;
    setItems(newItems);
  };

  const handleChange = (e, index) => {
    const newItems = [...items];
    // console.log(newItems);
    newItems[index].name = e.target.value;
    setItems(newItems);
  };

  return (
    <div className="container">
      <div className="controller-container">
        <Controller1 items={items} onSelect={handleSelectName} />
        <Controller2 onSelect={handleSelectColor} />
      </div>
      <div className="items-container">
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "solid black 1px",
              margin: "10px",
              padding: "20px",
              paddingBottom: "100px",
              backgroundColor: `${item.color}`,
            }}
          >
            <p style={{ marginTop: 0 }}>Component name:</p>
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hw2;
