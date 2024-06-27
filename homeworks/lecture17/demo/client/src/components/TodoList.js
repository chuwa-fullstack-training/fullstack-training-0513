import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, createTodo, toggleTodo, deleteTodo } from '../redux/actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const todo = e.target.value.trim();
      if (todo) {
        dispatch(createTodo(todo));
        e.target.value = '';
      }
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter todo"
        onKeyPress={handleAddTodo}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggleTodo(todo._id)}
              />
              {todo.todo}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
