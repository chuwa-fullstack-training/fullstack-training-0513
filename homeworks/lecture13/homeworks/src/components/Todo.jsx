import React, {Component} from "react";


export class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos : [],
            newTodo : ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTo = this.addTo.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.markAllDone = this.markAllDone.bind(this);
    };

    handleInputChange = (e) =>{
        this.setState({newTodo : e.target.value})
    }

    handleKeyDown = (e) =>{
        if (e.key === "Enter"){
            this.addTo();
        }
    }

    addTo = () => {
        this.setState(prevState => ({
            todos: [...prevState.todos, { text: prevState.newTodo, completed: false }],
            newTodo: ''
          }));
    }
    
    toggleTodo = (index) =>{
        this.setState(prevState => (
            {
                todos: prevState.todos.map((todo, i) => {
                    if (i === index){
                        return {...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })

            }
        ))
    }

    clearCompleted = () => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => !todo.completed)
        }))
    }

    markAllDone = () => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => ({
                ...todo,
                completed: true
            }))
        }))
    }

render(){
    return(
        <div className="container">
        <h1 className="mt-4 mb-4">Todo List</h1>
            <input 
            type="text" 
            value={this.state.newTodo} 
            placeholder="Add your new todo" 
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}/>

        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <p>{this.state.todos.filter(todo => !todo.completed).length} remaining</p>
          <button type="button"  onClick={this.clearCompleted}>Clear Completed</button>
        </div>

        <button  onClick={this.markAllDone}> Mark All Done </button>

            <div className="todos">
                <ul className="list-group mb-3">
                    {this.state.todos.map((todo, index) => (
                        <li key = {index} className="list-group-item d-flex align-items-center">
                            <input 
                            type="checkbox"
                            className="form-check-input me-2"
                            checked = {todo.completed}
                            onChange={() => this.toggleTodo(index)} />
                            <span className={todo.completed ? 'text-decoration-line-through' : ''}>
                                {todo.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            

        </div>
    )
}
};