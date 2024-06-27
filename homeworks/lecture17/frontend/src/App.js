import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, createTodo, updateTodo } from "./todoActions";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const todoState = useSelector((state) => state.todos);
  const { loading, error, todos } = todoState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleCreateTodo = () => {
    if (newTodo.trim()) {
      dispatch(createTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>
                {todo.todo} - {todo.done ? "done" : "pending"}
                <button onClick={() => handleUpdateTodo(todo._id)}>
                  Toggle
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
