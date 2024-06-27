import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, clearTodos, markAllDone } from "./actions";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const allDone = useSelector((state) => state.allDone);

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  const handleMarkAllDone = () => {
    dispatch(markAllDone());
  };

  const handleClick = (index) => {
    dispatch(toggleTodo(index));
  };

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
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
