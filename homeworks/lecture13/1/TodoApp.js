import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({newTodo: e.target.value});
    }

    addTodo = (e) => {
        e.preventDefault();
        if(this.state.newTodo.trim()){
            this.setState((prevState) => ({
                todos: [...prevState.todos, { text: this.state.newTodo, completed: false }],
                newTodo: ''
            }));
        }
    }

    toggleTodo = (index) => {
        this.setState((prevState) => {
            const newTodos = [...prevState.todos];
            newTodos[index].completed = !newTodos[index].completed;
            return { todos: newTodos };
        })
    }

    markAllDone = () => {
        this.setState((prevState) => {
            const newTodos = prevState.todos.map(todo => ({...todo, completed: true}));
            return { todos: newTodos };
        })
    }
    clearCompletedTodos = () =>{
        this.setState((prevState) => {
            const newTodos = prevState.todos.filter(todo => !todo.completed);
            return { todos: newTodos };
        })
    }

    render() {
        const remainingTodos = this.state.todos.filter(todo => !todo.completed).length;

        return (
            <div className="todo-app">
                <h1>Todos - ReactJs</h1>
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder="Type a todo and hit Enter"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                    />
                </form>
                <div className="controls">
                    <span>{remainingTodos} remaining</span>
                    <button onClick={this.clearCompletedTodos}>Clear Completed Todos</button>
                </div>
                <div className="mark-all">
                    <label>
                        <input type="checkbox" onClick={this.markAllDone}/>
                        Mark All Done
                    </label>
                </div>
                <ul className="todo-list">
                    {this.state.todos.map((todo, index) => (
                        <li key={index} className={todo.completed ? 'completed' : ''}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => this.toggleTodo(index)}
                                />
                                {todo.text}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}


export default TodoApp;