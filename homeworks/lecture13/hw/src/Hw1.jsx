import React, { useState } from "react";

const Hw1 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, { name: todo, completed: false }]);
      setTodo("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleAllDone = () => {
    const newTodos = todos.map((item) => ({
      ...item,
      completed: true,
    }));
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.map((item) => ({
      ...item,
      completed: false,
    }));
    setTodos(newTodos);
  };

  const remaining = todos.filter((item) => item.completed !== true).length;
  return (
    <>
      <h1>Todos-ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={todo}
        onKeyDown={handleEnter}
        onChange={handleChange}
      />
      <div style={{ display: "flex" }}>
        <p>{remaining} remaining</p>
        <button onClick={handleClear}>Clear Completed Todos</button>
      </div>
      <input
        type="checkbox"
        checked={remaining === 0 && todos.length > 0}
        onChange={handleAllDone}
      />
      Mark All Done
      {todos.map((item, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggleComplete(index)}
          />
          {item.name}
        </li>
      ))}
    </>
  );
};

export default Hw1;
