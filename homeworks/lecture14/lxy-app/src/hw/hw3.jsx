import { useState } from "react";
import '../css/hw3.css'

export default function HW() {
    const [todos, setTodos] = useState([
        { id: '1', name: 'first', done: false },
        { id: '2', name: 'work', done: true }
    ])

    const [allCompleted, setAllCompleted] = useState(false)
    
    // Function 1: add a new task
    const handleKeyUp = (e) => {
        if (e.keyCode !== 13) return;
        let input = e.target.value;

        // create and add task
        const task = {
            id: todos.length + 1,
            name: input,
            done: false,
        }
        setTodos([...todos, task]);

        // clear input value
        e.target.value = ""
    };

    // function 2: complete / undo a task
    const handleChange = (e, id) => {
        // updateToDo
        let done = e.target.checked;

        let updatedTodos = todos.map(item => {
            if (item.id === id) {
                return { ...item, done };
            } else {
                return item;
            }
        });

        setTodos(updatedTodos);
    };

    // function 3: complete all tasks
    const handleAllDone = (e) => {
        if (e.target.checked) {
            const updatedTodos = todos?.map(item => {
                item.done = true;
                return item;
            })
            setTodos(updatedTodos);
            setAllCompleted(true);
        }
    };

    // function 4: clear all completed todos
    const handleClearAllDone = () => {
        const updatedTodos = todos?.map(item => {
            item.done = false;
            return item;
        })
        setTodos(updatedTodos);
        setAllCompleted(false);
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
                    todos.map(item => {
                        return <li className="todo" key={item.id}>
                            <label>
                                <input type="checkbox" checked={item.done} onChange={(e) => handleChange(e, item.id)}></input>
                                <span>{item.name}</span>
                            </label>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
