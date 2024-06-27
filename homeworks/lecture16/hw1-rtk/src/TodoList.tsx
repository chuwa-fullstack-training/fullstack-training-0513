import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, toggleTodo } from './store';
import './App.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
