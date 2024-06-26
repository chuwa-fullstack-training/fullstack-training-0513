import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  state = {
    todos: [],
    newTodo: '',
  }
  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    if (this.state.newTodo.trim() === '') {
      return;
    }
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: prevState.newTodo, completed: false }],
      newTodo: '',
    }));
  };

  handleToggleTodo = (index) => {
    const newTodos = this.state.todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  handleClearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => !todo.completed),
    }));
  };

  handleMarkAllDone = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ({ ...todo, completed: true })),
    }));
  };

  render() {
    const activeTodoCount = this.state.todos.filter((todo) => !todo.completed).length;
    return (
      <div className="todo-list">
        <h1> Todos - ReactJs </h1>
        <form onSubmit={this.handleAddTodo}>
          <input type="text" value={this.state.newTodo} onChange={this.handleInputChange} placeholder="Type a todo and hit Enter" />
        </form>
        <div className="controls">
          <p>{activeTodoCount} remaining</p>
          <button onClick={this.handleClearCompleted} className="clear-btn">Clear Completed Todos</button>
        </div>
        <div>
          <input type="checkbox" onChange={this.handleMarkAllDone} checked={activeTodoCount === 0 && this.state.todos.length > 0} />
          <label>Mark All Done</label>
        </div>
        <ul>
          {
            this.state.todos.map((todo, index) => (
              <li key={index} className={todo.completed ? 'completed' : ''}>
                <input type="checkbox" checked={todo.completed} onChange={() => this.handleToggleTodo(index)} />
                {todo.text}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;