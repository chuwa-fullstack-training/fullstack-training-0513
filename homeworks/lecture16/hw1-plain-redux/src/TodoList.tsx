import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './store';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo: any) => (
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
