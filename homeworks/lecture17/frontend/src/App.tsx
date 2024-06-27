import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  _id: string;
  todo: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    try {
      const response = await axios.post('http://localhost:3000/api/todos', { todo: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.find(todo => todo._id === id);
      if (todo) {
        const updatedTodo = { ...todo, done: !todo.done };
        const response = await axios.put(`http://localhost:3000/api/todos/${id}`, updatedTodo);
        setTodos(todos.map(todo => todo._id === id ? response.data : todo));
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="grid justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="mb-2 grid grid-cols-4">
            <label className='col-span-3 flex'>
              <input 
                type="checkbox" 
                checked={todo.done}
                onChange={() => toggleTodo(todo._id)}
              />
              <p className={`ml-4 ${todo.done ? 'line-through' : ''}`}>{todo.todo}</p>
            </label>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 text-white text-sm px-2 py-1 rounded ms-auto col-span-1"
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