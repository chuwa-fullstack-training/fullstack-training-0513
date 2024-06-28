import './todo.css';
import { useSelector, useDispatch } from "react-redux";
import  { addTodo, updateTodo, markAllDone, clearAllDone } from './store/todos'

export default function Todo() {
    const todos = useSelector(state => state.todos.todos);
    const allCompleted = useSelector(state => state.todos.allCompleted);
    const dispatch = useDispatch();
    
    // Function 1: add a new task
    const handleKeyUp = (e) => {
        if (e.keyCode !== 13) return;
        let input = e.target.value;

        // create and add task
        const task = {
            id: todos.length,
            name: input,
            done: false,
        }
        dispatch(addTodo(task));

        // clear input value
        e.target.value = ""
    };

    // function 2: complete / undo a task
    const handleChange = (e, id) => {
        dispatch(updateTodo(id));
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
