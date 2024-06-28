import './todo.css';
import { useSelector, useDispatch } from "react-redux";
import  { addTodo, updateTodo, markAllDone, clearAllDone, fetchTodosAsync } from './store/todos'
import { useEffect } from 'react';

export default function Todo() {
    const { todos, allCompleted, status } = useSelector( status => status.todos);
    // const todos = useSelector(state => state.todos.todos);
    // const allCompleted = useSelector(state => state.todos.allCompleted);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, []);

    if (status === "pending") return <div>Loading...</div>;
    if (status === "failed") return <div>Fetching users failed</div>;

    // Function 1: add a new task
    const handleKeyUp = (e) => {
        if (e.keyCode !== 13) return;
        let input = e.target.value;

        // create and add task
        const task = {
            _id: todos.length,
            todo: input,
            done: false,
        }
        dispatch(addTodo(task));

        // clear input value
        e.target.value = ""
    };

    // function 2: complete / undo a task
    const handleChange = (e, idx) => {
        dispatch(updateTodo(idx));
    };

    // function 3: complete all tasks
    const handleAllDone = (e) => {
        if (e.target.checked) {
            dispatch(markAllDone());
        }
    };

    // function 4: clear all completed todos
    const handleClearAllDone = () => {
        console.log("clear all");
        dispatch(clearAllDone());
    };
    

    const inCompletedTask = todos?.reduce((acc, item) => acc + (item.done ? 0 : 1), 0)
    return (
        <div className="app-container">
            <h1 className="app-title">Todos - ReactJS</h1>
            <input className="text-field" type="text" placeholder="Type a todo and hit Enter" onKeyUp={handleKeyUp}></input>
            <div className="op-wrapper">
                <p className="count-display">{inCompletedTask} remaining</p>
                <button className="clear-button" onClick={handleClearAllDone}>Clear Completed Todos</button>
            </div>
            <div className='complete-all'>
                <input type="checkbox" checked={allCompleted} onChange={handleAllDone}></input>
                <p>Mark All Done</p>
            </div>
            <ul className="todolist">
                {
                    todos.map((item, idx) => {
                        return <li className="todo" key={idx}>
                            <label>
                                <input type="checkbox" checked={item.done} onChange={(e) => handleChange(e, idx)}></input>
                                <span>{item.todo}</span>
                            </label>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
