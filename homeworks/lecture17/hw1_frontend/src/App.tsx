import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import FormRow from './FormRow'
import ListItem, { ListItemPropType, ListTitle } from './ListItem'
import { StateType } from './redux/reducer'
import { set_title_field_data, set_description_field_data, set_deadline_field_data } from "./redux/reducer"
import { add_todo, sync_todo_list } from './redux/thunks'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch();
  const title_field_data: string = useSelector((state: StateType) => state.title_field_data);
  const description_field_data: string = useSelector((state: StateType) => state.description_field_data);
  const deadline_field_data: string = useSelector((state: StateType) => state.deadline_field_data);
  const items: ListItemPropType[] = useSelector((state: StateType) => state.items);
  const error: string | null = useSelector((state: StateType) => state.error);

  useEffect(() => {
    dispatch(sync_todo_list(null));
  }, [])
  const handleAddTodoClick = () => {
    dispatch(add_todo({ 
      title: title_field_data,
      description: description_field_data,
      deadline: deadline_field_data
    }));
  }

  if (error !== null) {
    return <h1>Error: {error}, please refresh the page</h1>
  }
  return (
    <div id='app'>
      <h1>Todo List Uitimate Version</h1>
      <div id='formfield'>
        <FormRow labelname='Title: ' input_placeholder='Enter title of todo stuff' input_type='text' 
        input_value={ title_field_data } dispatch_action={ set_title_field_data }/>
        <FormRow labelname='Description: ' input_placeholder='Enter description of todo stuff' input_type='text'
        input_value={ description_field_data } dispatch_action={ set_description_field_data }/>
        <FormRow labelname='Deadline: ' input_placeholder='Enter deadline of todo stuff' input_type='date'
        input_value={ deadline_field_data } dispatch_action={ set_deadline_field_data }/>
        <button id='add_todo_button' onClick={ handleAddTodoClick }>Add Todo Stuff</button>
      </div>
      <div id="list">
        <ListTitle />
        { items.length === 0 ?
          <div id='noitem_banner'>No todo list item</div>: 
          items.map((value: ListItemPropType) => 
          <ListItem id={value.id} key={value.id} title={value.title} 
          description={value.description} created_time={value.created_time}
          deadline={value.deadline}/>) 
        }
      </div>
    </div>
  )
}

export default App
