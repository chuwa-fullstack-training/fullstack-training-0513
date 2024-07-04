import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { addTodo, toggleComplete, removeTodo, markAllComplete, clearCompleted } from './todoSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (e) =>  {
    if (e.key === 'Enter' && newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()))
      setNewTodo('');
    }
  }

  const remaining = todos.reduce((acc, cur) => 
    acc + (cur.complete?0:1)
  ,0)

  const handleClearTodos = () => {
    dispatch(clearCompleted());
  }

  const handleMarkAllDone = () => {
    dispatch(markAllComplete());
  }

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  return (
    <div>
      <h1>Todos - ReactJs</h1>
      <input 
        type="text" 
        value={newTodo} 
        placeholder='Type a todo and hit Enter' 
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleAddTodo}
        ></input>
      <div>
        <h2>{remaining} remaining</h2>
        <button onClick={handleClearTodos}>Clear Completed Todos</button>
      </div>
      <label>
        <input type="checkbox" onClick={handleMarkAllDone} checked={remaining===0} /> Mark All Done
      </label>
      <TodoList todos={todos} toggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;
