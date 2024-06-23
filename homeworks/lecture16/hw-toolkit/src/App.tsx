import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { addTodo, toggleTodo, toggleAll, clearCompleted } from './app/reducers';

const App = () => {

  const list = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [isMarkAll, setIsMarkAll] = useState(false);

  const clear = (): void => {
    dispatch(clearCompleted());
    setRemaining(list.length);
    setIsMarkAll(false);
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      if (todo === '') return;
      dispatch(addTodo(todo));
      setTodo('');
      setRemaining(remaining + 1);
    }
  };

  const markAll = (): void => {
    dispatch(toggleAll(!isMarkAll));
    setRemaining(isMarkAll ? list.length : 0);
    setIsMarkAll(!isMarkAll);
  };

  const markOne = (id: string): void => {
    const t = list.find((item) => item.id === id);
    let r = remaining;
    if (t && t.check) r = r + 1;
    else r = r - 1;
    dispatch(toggleTodo(id));
    setRemaining(r);
    setIsMarkAll(r === 0);
  };

  return (
    <>
      <h2>HW - lecture16 - Toolkit</h2>
      <div className="todo">
        <h2>Todos - ReactJs</h2>
        <input className="input-box" placeholder="Type a todo and hit Enter" value={todo}
               onKeyUp={keyUp}
               onChange={(e) => {
                 setTodo(e.target.value)
               }}/>
        <div className="info">
          <p>{remaining} remaining</p>
          <button onClick={clear}>Clear Completed Todos</button>
        </div>
        <label className="mark-all">
          <input type="checkbox" checked={isMarkAll} onChange={markAll}/>
          Mark All Done
        </label>
        <ul className={list.length === 0 ? "no-border" : ""}>
          {list.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" checked={item.check} onChange={() => {
                  markOne(item.id)
                }}/>
                {item.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
