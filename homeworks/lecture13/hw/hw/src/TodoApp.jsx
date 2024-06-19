import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: '001', name: 'eat', done: false},
                {id: '002', name: 'work', done: true}
            ]
        }
    }

    addTodo = (todo) => {
        this.setState({todos:[...this.state.todos, todo]});
    }

    updateTodo = (id, done) => {
        const {todos}  = this.state;
        let newtodos = todos.map(item => {
            if (item.id === id) {
                return {...item, done};
            } else {
                return item;
            }
        });
        this.setState({todos: newtodos});
    }

    handleMarkAllDone = (event) => {
        if (event.target.checked) {
            const newTodos = this.state.todos?.map(item => {
                item.done = true;
                return item;
            })
            this.setState({todos: newTodos});
        }
    }

    handleClearAllDone = () => {
        const newTodos = this.state.todos?.map(item => {
            item.done = false;
            return item;
        })
        this.setState({todos: newTodos});
    }


    render() {
        return (
            <>
                <h1>Todos - ReactJs</h1>
                <Header addTodo={this.addTodo}/>
                <Footer todos={this.state.todos} handleMarkAllDone={this.handleMarkAllDone} handleClearAllDone={this.handleClearAllDone}/>
                <TodoList todos={this.state.todos} updateTodo={this.updateTodo}/>
            </>
            
        )
    }



}