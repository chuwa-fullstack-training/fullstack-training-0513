import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTodo } from './store';
import './App.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const loading = useSelector((state: RootState) => state.todos.loading);
  const error = useSelector((state: RootState) => state.todos.error);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.done ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.todo}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
