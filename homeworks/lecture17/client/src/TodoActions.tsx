import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAllCompleted, clearCompleted, RootState } from "./store";
import "./App.css";

const TodoActions: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const remainingTodos = todos.filter((todo) => !todo.done).length;

  return (
    <div className="todo-actions">
      <div className="todo-remains">
        <span>{remainingTodos} remaining</span>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>
      <label>
        <input type="checkbox" onChange={() => dispatch(markAllCompleted())} />
        Mark All Done
      </label>
    </div>
  );
};

export default TodoActions;
