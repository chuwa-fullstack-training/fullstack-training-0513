import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
  addTodo,
  toggleTodo,
  clearCompleted,
  markAllDone,
} from "./slice/todosSlice";
import "./Hw3.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const todos = useSelector((state) => state.todos.todos);
  const remaining = todos.filter((item) => !item.completed).length;

  const handleKey = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo());
    }
  };

  const handleChange = (e) => {
    dispatch(setTodo(e.target.value));
  };

  return (
    <div className="container">
      <h1>Todos-ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={todo}
        onKeyDown={handleKey}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{remaining} remaining</p>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>
      <div>
        <input
          type="checkbox"
          checked={remaining === 0 && todos.length > 0}
          onChange={() => dispatch(markAllDone())}
        />
        Mark All Done
      </div>
      {todos.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => dispatch(toggleTodo(index))}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Todo;
