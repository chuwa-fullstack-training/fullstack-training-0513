import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const markAllDone = () => {
        const newTodos = todos.map(todo => ({ ...todo, completed: true }));
        setTodos(newTodos);
    };

    const clearCompletedTodos = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    const remainingTodos = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todo-app">
            <h1>Todos - ReactJs</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Type a todo and hit Enter"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </form>
            <div className="controls">
                <span>{remainingTodos} remaining</span>
                <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
            </div>
            <div className="mark-all">
                <label>
                    <input type="checkbox" onClick={markAllDone} />
                    Mark All Done
                </label>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                            />
                            {todo.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
