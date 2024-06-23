import React, {useState} from 'react';

interface todoType {
  id: string,
  check: boolean,
  text: string
}

const App = () => {

  const [todo, setTodo] = useState('');
  const [list, setList] = useState<todoType[]>([]);
  const [remaining, setRemaining] = useState(0);
  const [isMarkAll, setIsMarkAll] = useState(false);

  const clearCompleted = (): void => {
    const newList: todoType[] = list.map(item => {
      item.check = false;
      return item;
    });
    setRemaining(newList.length);
    setIsMarkAll(false);
    setList(newList);
  };

  const keyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      if (todo === '') return;
      const t: todoType = {
        id: new Date().getTime().toString(),
        check: false,
        text: todo
      }
      setList([...list, t]);
      setTodo('');
      setRemaining(remaining + 1);
    }
  };

  const markAll = (): void => {
    const newList: todoType[] = list.map(item => {
      item.check = !isMarkAll;
      return item;
    });
    setRemaining(isMarkAll ? newList.length : 0);
    setIsMarkAll(!isMarkAll);
    setList(newList);
  };

  const markOne = (id: string): void => {
    let remain = remaining;
    const newList: todoType[] = list.map(item => {
      if (item.id === id) {
        if (item.check) remain++;
        else remain--;
        item.check = !item.check;
      }
      return item;
    });
    setRemaining(remain);
    setIsMarkAll(remain === 0);
    setList(newList);
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
          <button onClick={clearCompleted}>Clear Completed Todos</button>
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
