import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [allDone, setAllDone] = useState(false);
  function addTodo() {
    setTodos([...todos, { todo: todo, done: allDone }]);
    setTodo("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTodo();
    }
  }
  function handleClearTodos() {
    const newAllDone = false;
    const newTodos = todos.map((item) => ({
      ...item,
      done: newAllDone,
    }));
    setTodos(newTodos);
    setAllDone(newAllDone);
  }
  function handleMarkAllDone() {
    const newAllDone = !allDone;
    const newTodos = todos.map((item) => ({
      ...item,
      done: newAllDone,
    }));
    setAllDone(newAllDone);
    setTodos(newTodos);
  }
  function handleClick(index) {
    const newTodos = todos.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <div className="container mt-5" style={{ width: "960px" }}>
      <div className="row">
        <div className="col">
          <div className="h1 text-center">Todos - ReactJs</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg mt-4"
            aria-label=".form-control-lg example"
            value={todo}
            onKeyDown={handleKeyDown}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Type a todo and hit Enter"
          ></input>
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <label>{todos.filter((todo) => !todo.done).length} remaining</label>
        <button
          type="button"
          onClick={handleClearTodos}
          className="btn btn-success"
        >
          Clear completed Todos
        </button>
      </div>

      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={allDone}
          id="flexCheckDefault"
          onChange={handleMarkAllDone}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Mark All Done
        </label>
      </div>
      <ul className="list-group mt-3">
        {todos.map((item, index) => (
          <li key={index} className="list-group-item">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => handleClick(index)}
            ></input>{" "}
            {}
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
