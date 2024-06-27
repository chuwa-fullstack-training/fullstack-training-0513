import React from "react";
import '../css/hw1.css'

class HW extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: '1', name: 'first', done: false },
                { id: '2', name: 'work', done: true }
            ],
            allCompleted: false
        };
    }

    // Function 1: add a new task
    handleKeyUp = (e) => {
        if (e.keyCode !== 13) return;
        let input = e.target.value;

        // create and add task
        const task = {
            id: this.state.todos.length + 1,
            name: input,
            done: false,
        }
        this.setState({ todos: [...this.state.todos, task] });

        // clear input value
        e.target.value = ""
    }

    // function 2: complete / undo a task
    handleChange = (e, id) => {
        // updateToDo
        let done = e.target.checked;

        const { todos } = this.state;
        let updatedTodos = todos.map(item => {
            if (item.id === id) {
                return { ...item, done };
            } else {
                return item;
            }
        });

        this.setState({ todos: updatedTodos });
    }

    // function 3: complete all tasks
    handleAllDone = (e) => {
        if (e.target.checked) {
            const updatedTodos = this.state.todos?.map(item => {
                item.done = true;
                return item;
            })
            this.setState({ 
                todos: updatedTodos,
                allCompleted: true, 
            })
        }
    }

    // function 4: clear all completed todos
    handleClearAllDone = () => {
        const updatedTodos = this.state.todos?.map(item => {
            item.done = false;
            return item;
        })
        this.setState({
            todos: updatedTodos,
            allCompleted: false,
        });

    }


    render() {
        const inCompletedTask = this.state.todos?.reduce((acc, item) => acc + (item.done ? 0 : 1), 0)
        return (
            <div className="app-container">
                <h1 className="app-title">Todos - ReactJS</h1>
                <input className="text-field" type="text" placeholder="Type a todo and hit Enter" onKeyUp={this.handleKeyUp}></input>
                <div className="op-wrapper">
                    <p className="count-display">{inCompletedTask} remaining</p>
                    <button className="clear-button" onClick={this.handleClearAllDone}>Clear Completed Todos</button>
                </div>
                <div className='complete-all'>
                    <input type="checkbox" checked={this.state.allCompleted} onChange={this.handleAllDone}></input>
                    <p>Mark All Done</p>
                </div>
                <ul className="todolist">
                    {
                        this.state.todos.map(item => {
                            return <li className="todo" key={item.id}>
                                <label>
                                    <input type="checkbox" checked={item.done} onChange={(e) => this.handleChange(e, item.id)}></input>
                                    <span>{item.name}</span>
                                </label>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HW