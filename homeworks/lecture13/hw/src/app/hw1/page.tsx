"use client";
import React, { Component } from 'react';

class Hw1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      toDoList: [],
      markAll: false,
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addToDo = (event) => {
    if (event.key === 'Enter') {
      this.setState((prevState) => ({
        toDoList: [...prevState.toDoList, { text: prevState.inputValue, completed: false }],
        inputValue: "",
      }));
    }
  };

  handleCheck = (index) => {
    this.setState((prevState) => {
      const updatedList = prevState.toDoList.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { toDoList: updatedList };
    });
  };

  handleMarkAll = () => {
    this.setState((prevState) => {
      const newTodos = prevState.toDoList.map((todo) => ({ ...todo, completed: !prevState.markAll }));
      return { toDoList: newTodos, markAll: !prevState.markAll };
    });
  };

  handleClear = () => {
    this.setState((prevState) => {
      const clearTodos = prevState.toDoList.filter((todo) => !todo.completed);
      return { toDoList: clearTodos };
    });
  };

  render() {
    const { inputValue, toDoList, markAll } = this.state;
    const count = toDoList.filter((todo) => !todo.completed).length;

    return(
      <div className='mx-auto w-4/5'>
        <p className="text-3xl font-bold w-full">Todos - ReactJs</p>
        <label className="block mt-4">
          <input 
            type="text"
            className="p-2 border border-gray-200 rounded w-full focus:outline-blue-300"
            placeholder='Type a todo and hit Enter' 
            value={inputValue}
            onChange={this.handleChange}
            onKeyDown={this.addToDo}
          />
        </label>
  
        <div className='grid grid-cols-2 justify-between mt-4'>
          <p className='text-lg grid-span-1 py-2'>{count} remaining</p>
          <button 
            className='ms-auto grid-span-1 text-lg font-bold border border-black hover:bg-gray-300 hover:text-white hover:border-gray-500 rounded py-2 px-4 text-gray-400 w-fit'
            onClick={this.handleClear}
          >
            Clear Completed Todos
          </button>
        </div>
        
        <label className="block mt-4 group text-lg">
          <input 
            type="checkbox"
            className="mr-2"
            checked={markAll}
            onChange={this.handleMarkAll}
          />
          Mark All Done
        </label>
  
        <ul className='mt-4'>
          {toDoList.map((todo, index) => (
            <li key={index} className='mt-1 border border-gray-200 p-2 rounded'>
              <label className='group block text-lg'>
                <input type="checkbox" checked={todo.completed} onClick={() => this.handleCheck(index)} className='mr-2'/>
                {todo.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hw1;