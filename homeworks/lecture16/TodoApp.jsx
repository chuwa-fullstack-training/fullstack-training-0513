// TodoApp.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, markAllDone, clearCompletedTodos, setNewTodo } from './todosSlice';
import './TodoApp.css';

const TodoApp = () => {
    const todos = useSelector((state) => state.todos.todos);
    const newTodo = useSelector((state) => state.todos.newTodo);
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo());
    };

    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index));
    };

    const handleMarkAllDone = () => {
        dispatch(markAllDone());
    };

    const handleClearCompletedTodos = () => {
        dispatch(clearCompletedTodos());
    };

    const handleNewTodoChange = (e) => {
        dispatch(setNewTodo(e.target.value));
    };

    const remainingTodos = todos.filter(todo => !todo.completed).length;

    return (
        <div className="todo-app">
            <h1>Todos - ReactJs</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Type a todo and hit Enter"
                    value={newTodo}
                    onChange={handleNewTodoChange}
                />
            </form>
            <div className="controls">
                <span>{remainingTodos} remaining</span>
                <button onClick={handleClearCompletedTodos}>Clear Completed Todos</button>
            </div>
            <div className="mark-all">
                <label>
                    <input type="checkbox" onClick={handleMarkAllDone} />
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
                                onChange={() => handleToggleTodo(index)}
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
