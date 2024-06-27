import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  clearTodos,
  markAllDone,
  toggleTodo,
  selectTodos,
  selectRemainingTodosCount,
} from "./todosSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const remainingCount = useSelector(selectRemainingTodosCount);

  const [todo, setTodo] = useState("");
  const [allDone, setAllDone] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && todo.trim()) {
      dispatch(addTodo({ todo, done: allDone }));
      setTodo("");
    }
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
    setAllDone(false);
  };

  const handleMarkAllDone = () => {
    dispatch(markAllDone(!allDone));
    setAllDone(!allDone);
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
        <label>{remainingCount} remaining</label>
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
            />
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
