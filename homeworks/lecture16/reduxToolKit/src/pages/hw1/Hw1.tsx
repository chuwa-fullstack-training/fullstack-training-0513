"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, markAllTodo, clearCompleted } from '../../store/reducers.js';

const Hw1 = () => {
  const [inputValue, setInputValue] = useState("");
  const toDoList = useSelector((state) => state.todos.toDoList);
  const markAll = useSelector((state) => state.todos.markAll);
  const dispatch = useDispatch();

  const count = toDoList.filter((todo) => !todo.completed).length;

  const addToDo = (event) => {
    if (event.key === 'Enter') {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleCheck = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleMarkAll = () => {
    dispatch(markAllTodo());
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className='mx-auto w-4/5'>
      <p className="text-3xl font-bold w-full">Todos - ReactJs</p>
      <label className="block mt-4">
        <input 
          type="text"
          className="p-2 border border-gray-200 rounded w-full focus:outline-blue-300"
          placeholder='Type a todo and hit Enter' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addToDo}
        />
      </label>

      <div className='grid grid-cols-2 justify-between mt-4'>
        <p className='text-lg grid-span-1 py-2'>{count} remaining</p>
        <button 
          className='ms-auto grid-span-1 text-lg font-bold border border-black hover:bg-gray-300 hover:text-white hover:border-gray-500 rounded py-2 px-4 text-gray-400 w-fit'
          onClick={handleClear}
        >
          Clear Completed Todos</button>
      </div>
      
      <label className="block mt-4 group text-lg">
        <input 
          type="checkbox"
          className="mr-2"
          checked={markAll}
          onChange={handleMarkAll}
        />
        Mark All Done
      </label>

      <ul className='mt-4'>
        {toDoList.map((todo, index) => (
          <li key={index} className='mt-1 border border-gray-200 p-2 rounded'>
            <label className='group block text-lg'>
              <input type="checkbox" checked={todo.completed} onClick={() => handleCheck(index)} className='mr-2'/>
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hw1;