import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from './redux/store';
import { createAddTodoListAction, createMarkAllDoneAction, createToggleDoneAction, 
      createClearDoneAction, createChangeInputDataAction, 
      createToggleAllDoneCheckedAction} from './redux/actions';

function App() {
  const input_data: string = useSelector((state: StateType) => state.input_data);
  const num_remaining: number = useSelector((state: StateType) => state.num_remaining);
  const all_done_checked: boolean = useSelector((state:StateType) => state.all_done_checked);
  const todolist_data: { content: string, done: boolean }[] = useSelector((state:StateType) => state.todolist_data);

  const dispatch = useDispatch();
  const changeInputValue = (value: string) => {
    dispatch(createChangeInputDataAction(value));
  }
  const addlist = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && input_data !== "") {
      dispatch(createAddTodoListAction());
      dispatch(createChangeInputDataAction(""));
    }
  }
  const clearCompleted = () => {
    dispatch(createClearDoneAction());
  }

  const changeAdmark = () => {
    dispatch(createMarkAllDoneAction());
    dispatch(createToggleAllDoneCheckedAction());
  }

  const toggleItemDone = (index: number) => {
    dispatch(createToggleDoneAction(index));
  }

  return (
    <>
    <h1 id='title1'>Todos - ReactJS</h1>
      <div id='input-container'>
        <input id='input' type='text'  
        value = { input_data }
        onChange={(e) => changeInputValue(e.target.value) } 
        onKeyDown={ (e) => addlist(e) }
        placeholder='Type a todo and hit Enter' />
      </div>
      <div id='control_row_container'>
        <div>{ num_remaining } remaining</div>
        <button id='clearbuttom' onClick={ clearCompleted }>Clear Completed todos</button>
      </div>
      <div id='control_row_container2'>
        <input type='checkbox' checked={ all_done_checked } onChange={ changeAdmark }></input>
        Mark all done
      </div>
      {
        todolist_data.length === 0 ? 
        <div></div> :
        <div id='todolist_container'>
          { todolist_data.map((value, index) => <div className='listitem' key={ index }>
              <input type='checkbox' checked={ value.done } onChange={ () => toggleItemDone(index) }/>
              {index + 1}: { value.content }
            </div>) }
        </div>
      }
      </>
  )
}

export default App
