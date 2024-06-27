import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { StateType } from './redux/reducer';
// import { createAddTodoListAction, createMarkAllDoneAction, createToggleDoneAction, 
//       createClearDoneAction, createChangeInputDataAction, 
//       createToggleAllDoneCheckedAction} from './redux/actions';
import { add_todo_list, mark_all_done, toggle_done, clear_done, 
    change_input_data, toggle_all_done_checked } from './redux/reducer'

function App() {
  const input_data: string = useSelector((state: StateType) => state.input_data);
  const num_remaining: number = useSelector((state: StateType) => state.num_remaining);
  const all_done_checked: boolean = useSelector((state:StateType) => state.all_done_checked);
  const todolist_data: { content: string, done: boolean }[] = useSelector((state:StateType) => state.todolist_data);

  const dispatch = useDispatch();
  const changeInputValue = (value: string) => {
    dispatch(change_input_data(value));
  }
  const addlist = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && input_data !== "") {
      dispatch(add_todo_list());
      dispatch(change_input_data(""));
    }
  }
  const clearCompleted = () => {
    dispatch(clear_done());
  }

  const changeAdmark = () => {
    dispatch(mark_all_done());
    dispatch(toggle_all_done_checked());
  }

  const toggleItemDone = (index: number) => {
    dispatch(toggle_done(index));
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
