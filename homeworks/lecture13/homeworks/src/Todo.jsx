import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      allDone: false,
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClearTodos = this.handleClearTodos.bind(this);
    this.handleMarkAllDone = this.handleMarkAllDone.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  addTodo() {
    this.setState((state) => ({
      todos: [...state.todos, { todo: state.todo, done: state.allDone }],
      todo: "",
    }));
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.addTodo();
    }
  }

  handleClearTodos() {
    const newAllDone = false;
    const newTodos = this.state.todos.map((item) => ({
      ...item,
      done: newAllDone,
    }));
    this.setState({
      todos: newTodos,
      allDone: newAllDone,
    });
  }

  handleMarkAllDone() {
    const newAllDone = !this.state.allDone;
    const newTodos = this.state.todos.map((item) => ({
      ...item,
      done: newAllDone,
    }));
    this.setState({
      allDone: newAllDone,
      todos: newTodos,
    });
  }

  handleClick(index) {
    const newTodos = this.state.todos.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="container mt-5" style={{ width: "960px" }}>
        <div className="row">
          <div className="col">
            <div className="h1 text-center">Todos - ReactJs</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control form-control-lg mt-4"
              aria-label=".form-control-lg example"
              value={this.state.todo}
              onKeyDown={this.handleKeyDown}
              onChange={(e) => this.setState({ todo: e.target.value })}
              placeholder="Type a todo and hit Enter"
            ></input>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <label>
            {this.state.todos.filter((todo) => !todo.done).length} remaining
          </label>
          <button
            type="button"
            onClick={this.handleClearTodos}
            className="btn btn-success"
          >
            Clear completed Todos
          </button>
        </div>

        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={this.state.allDone}
            id="flexCheckDefault"
            onChange={this.handleMarkAllDone}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Mark All Done
          </label>
        </div>
        <ul className="list-group mt-3">
          {this.state.todos.map((item, index) => (
            <li key={index} className="list-group-item">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => this.handleClick(index)}
              ></input>{" "}
              {}
              {item.todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
