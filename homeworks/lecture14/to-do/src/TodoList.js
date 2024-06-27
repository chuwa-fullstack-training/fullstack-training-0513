import React, {useState} from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() == '') {
      return;
    }
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const handleMarkAllDone = () => {
    setTodos(todos.map((todo) => ({...todo, completed: true })));
  };

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-list">
      <h1> Todos - ReactJs </h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Type a todo and hit Enter"/>
      </form>
      <div className="controls">
        <p>{activeTodoCount} remaining</p>
        <button onClick={handleClearCompleted} className="clear-btn">Clear Completed Todos</button>
      </div>
      <div>
        <input type="checkbox" onChange={handleMarkAllDone} checked={activeTodoCount === 0 && todos.length > 0} />
        <label>Mark All Done</label>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;