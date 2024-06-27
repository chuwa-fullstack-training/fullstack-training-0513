import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo } from '../redux/todosSlice';
import './TodoApp.css';

const TodoApp = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const todoStatus = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        if (todoStatus === 'idle') {
            dispatch(fetchTodos());
        }
    }, [todoStatus, dispatch]);

    const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(addTodo({ todo: newTodo }));
            setNewTodo('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const remainingTodos = todos.filter((todo) => !todo.done).length;

    const handleMarkAllDone = () => {
        todos.forEach((todo) => {
            if (!todo.done) {
                dispatch(toggleTodo(todo._id));
            }
        });
    };

    const handleSync = () => {
        dispatch(fetchTodos());
    };

    let content;
    if (todoStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (todoStatus === 'succeeded') {
        content = todos.map((todo) => (
            <li key={todo._id} className={todo.done ? 'completed' : ''}>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => handleToggleTodo(todo._id)}
                    />
                    {todo.todo}
                </label>
            </li>
        ));
    } else if (todoStatus === 'failed') {
        content = <p>{error}</p>;
    }

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
            </div>
            <div className="mark-all">
                <label>
                    <input type="checkbox" onClick={handleMarkAllDone}/>
                    Mark All Done
                </label>
            </div>
            <button onClick={handleSync}>Sync</button>
            <ul className="todo-list">
                {content}
            </ul>
        </div>
    );
};

export default TodoApp;
