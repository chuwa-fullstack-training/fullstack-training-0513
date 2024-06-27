import React, { useState } from 'react';
import './TodoApp.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todos - ReactJs</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Type a todo and hit Enter"
        />
      </form>
      <div className="todo-actions">
        <span>{remainingTodos} remaining</span>
        <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
      </div>
      <label>
          <input
            type="checkbox"
            onChange={markAllCompleted}
          />
          Mark All Done
        </label>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
