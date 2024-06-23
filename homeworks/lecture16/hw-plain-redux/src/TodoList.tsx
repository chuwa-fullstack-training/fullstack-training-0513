import React, {useState, FC} from 'react';

interface todoType {
  id: string,
  check: boolean,
  text: string
}

interface TodoListProps {
  list: todoType[],
  addTodo: (text: string) => void,
  toggleTodo: (id: string) => void,
  toggleAll: (allCompleted: boolean) => void,
  clearCompleted: () => void
}

const TodoList: FC<TodoListProps> = ({ list, addTodo, toggleTodo, clearCompleted, toggleAll }) => {

  const [todo, setTodo] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [isMarkAll, setIsMarkAll] = useState(false);

  const clear = (): void => {
    clearCompleted();
    setRemaining(list.length);
    setIsMarkAll(false);
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      if (todo === '') return;
      addTodo(todo);
      setTodo('');
      setRemaining(remaining + 1);
    }
  };

  const markAll = (): void => {
    toggleAll(!isMarkAll);
    setRemaining(isMarkAll ? list.length : 0);
    setIsMarkAll(!isMarkAll);
  };

  const markOne = (id: string): void => {
    const t = list.find((item) => item.id === id);
    let r = remaining;
    if (t && t.check) r = r + 1;
    else r = r - 1;
    toggleTodo(id);
    setRemaining(r);
    setIsMarkAll(r === 0);
  };

  return (
    <>
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

export default TodoList;
