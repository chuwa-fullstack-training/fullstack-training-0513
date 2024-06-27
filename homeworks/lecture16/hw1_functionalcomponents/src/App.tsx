// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

type LItemType = {
  content: string,
  completed: boolean
};

function App() {
  // const [count, setCount] = useState(0)
  const [inputvalue, setInputvalue] = useState<string>("");
  const [todo_list, set_todo_list] = useState<LItemType[]>([]);
  const [admark, setAdmark] = useState<boolean>(false);

  const changeInputValue = (v: string) => {
    setInputvalue(v);
  };

  const changeCheckbox = (idx: number) => {
    const newlist: LItemType[] = JSON.parse(JSON.stringify(todo_list));
    if (idx === -1) {
      for (const ele of newlist) {
        ele.completed = true;
      }
    } else {
      newlist[idx].completed = !newlist[idx].completed;
    }
    set_todo_list(newlist);
  }

  const addlist = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && inputvalue != "") {
      set_todo_list([...todo_list, {content: inputvalue, completed: false}]);
      setInputvalue("");
    }
  }

  const clearCompleted = () => {
    const newtodolist = JSON.parse(JSON.stringify(todo_list));
    for(const ele of newtodolist)  {
      ele.completed = false;
    }
    set_todo_list(newtodolist);
    setAdmark(false);
  }

  const changeAdmark = () => {
    if (!admark) {
      changeCheckbox(-1);
    }
    setAdmark((prev) => { return !prev; });
  }

  const numRemaining = () => {
    return todo_list.reduce((prev: number, value: LItemType) => {
      return value.completed ? prev : prev + 1;
    }, 0);
  }
  return (
    <>
      <h1 id='title1'>Todos - ReactJS</h1>
      <div id='input-container'>
        <input id='input' type='text'  
        value = { inputvalue }
        onChange={(e) => changeInputValue(e.target.value) } 
        onKeyDown={ (e) => addlist(e) }
        placeholder='Type a todo and hit Enter' />
      </div>
      <div id='control_row_container'>
        <div>{ numRemaining() } remaining</div>
        <button id='clearbuttom' onClick={ clearCompleted }>Clear Completed todos</button>
      </div>
      <div id='control_row_container2'>
        <input type='checkbox' checked={ admark } onChange={ changeAdmark }></input>
        Mark all done
      </div>
      {
        todo_list.length === 0 ? 
        <div></div> :
        <div id='todolist_container'>
          { todo_list.map((value, index) => <div className='listitem' key={ index }>
              <input type='checkbox' checked={ value.completed } onChange={ () => changeCheckbox(index) }/>
              {index + 1}: { value.content }
            </div>) }
        </div>
      }
      
    </>
  )
}

export default App
