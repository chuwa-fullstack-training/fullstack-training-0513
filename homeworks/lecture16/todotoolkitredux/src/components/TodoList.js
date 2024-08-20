import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTodo, addTodo, toggleTodo, clearCompleted, markAllDone } from '../store/actions';
import './TodoList.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, newTodo } = useSelector(state => state.todo);

  const handleInputChange = (e) => {
    dispatch(setNewTodo(e.target.value));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo());
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleMarkAllDone = () => {
    dispatch(markAllDone());
  };

  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-list">
      <h1> Todos - ReactJs </h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Type a todo and hit Enter"
        />
      </form>
      <div className="controls">
        <p>{activeTodoCount} remaining</p>
        <button onClick={handleClearCompleted} className="clear-btn">Clear Completed Todos</button>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleMarkAllDone}
          checked={activeTodoCount === 0 && todos.length > 0}
        />
        <label>Mark All Done</label>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
