import Hw2 from "./Hw2";
import ColorComponent from "./ColorComponent";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const Controller1 = ({ items, onSelect }) => {
  const navigate = useNavigate();
  return (
    <select
      name="name"
      id="name"
      onChange={(e) => {
        onSelect(+e.target.value);
        navigate(e.target.value);
      }}
    >
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

function App() {
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
    newItems[index].name = e.target.value;
    setItems(newItems);
  };

  return (
    <Router>
      <div className="controller-container">
        <Controller1 items={items} onSelect={handleSelectName} />
        <Controller2 onSelect={handleSelectColor} />
      </div>

      <Routes>
        <Route
          path="/"
          element={<Hw2 items={items} handleChange={handleChange} />}
        />
        {items.map((item, index) => (
          <Route
            path={`${index}`}
            element={
              <ColorComponent
                item={item}
                onChange={handleChange}
                index={index}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
