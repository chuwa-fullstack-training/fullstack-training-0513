import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) =>  {
    if (e.key === 'Enter' && newTodo.trim()) {
      setTodos(prev => [...prev, {id:Date.now(), name:newTodo, complete:false}]);
      setNewTodo('');
    }
  }

  const handleClearTodos = () => {
    let newtodos = [...todos];
    newtodos.map(todo => todo.complete = false);
    setTodos(newtodos);
  }

  const handleMarkAllDone = () => {
    let newtodos = [...todos];
    newtodos.map(todo => todo.complete = true);
    setTodos(newtodos);
  }
  const handleToggleComplete = (id) => {
    let newtodos = todos.map(todo => todo.id === id?{...todo, complete:!todo.complete}:todo);
    setTodos(newtodos);
  }
  const remaining = todos.reduce((acc, cur) => 
    acc + (cur.complete?0:1)
  ,0)

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
