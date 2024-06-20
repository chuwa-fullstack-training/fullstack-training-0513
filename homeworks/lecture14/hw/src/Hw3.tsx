import React, {useState} from "react";
import style from "./Hw3.module.css";

interface todoType {
  id: string,
  check: boolean,
  text: string
}

const Hw1 = () => {
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
    <div className={style.hw3}>
      <h3>Todos - ReactJs</h3>
      <input className={style.input_box} placeholder="Type a todo and hit Enter" value={todo}
             onKeyUp={keyUp}
             onChange={(e) => {setTodo(e.target.value)}}/>
      <div className={style.info}>
        <p>{remaining} remaining</p>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>
      <label className={style.mark_all}>
        <input type="checkbox" checked={isMarkAll} onChange={markAll}/>
        Mark All Done
      </label>
      <ul className={list.length === 0 ? style.no_border : ""}>
        {list.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.check} onChange={() => {markOne(item.id)}}/>
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hw1;