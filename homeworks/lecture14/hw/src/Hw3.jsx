import React, { useState } from "react";
import "./Hw3.css";
const Hw3 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          name: todo,
          completed: false,
        },
      ]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckboxToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.map((item) => ({
      ...item,
      completed: false,
    }));
    setTodos(newTodos);
  };

  const handleAllDone = () => {
    const newTodos = todos.map((item) => ({
      ...item,
      completed: true,
    }));
    setTodos(newTodos);
  };

  const remaining = todos.filter((item) => !item.completed).length;

  return (
    <div className="container">
      <h1>Todos-ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={todo}
        onKeyDown={(e) => handleKey(e)}
        onChange={(e) => handleChange(e)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{remaining} remaining</p>
        <button onClick={handleClear}>Clear Compelted Todos</button>
      </div>
      <div>
        <input
          type="checkbox"
          checked={remaining === 0 && todos.length > 0}
          onChange={handleAllDone}
        />
        Mark All Done
      </div>
      {todos.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleCheckboxToggle(index)}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Hw3;
