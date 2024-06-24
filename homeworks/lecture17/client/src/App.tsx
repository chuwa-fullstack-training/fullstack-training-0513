import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks';
import {getAllTodos, addOneTodo, updateOneTodo} from './app/reducers';
import Loading from "./Loading.tsx";

const App = () => {

  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const isLoading = useAppSelector((state) => state.todo.loading);
  const errorMsg = useAppSelector((state) => state.todo.error);

  const [todo, setTodo] = useState('');

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const handleSubmit = () => {
    if (todo === '') return;
    dispatch(addOneTodo({
      done: false,
      todo: todo
    }));
    setTodo('');
  };

  const handleCheck = (id: string) => {
    dispatch(updateOneTodo(id));
  };

  return (
    <>
      <h2>HW - lecture17</h2>
      <div className="container width-600">
        <div className="row">
          <div className="col">
            <h1>To-do List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <input name="todo" id="todo" className="form-control" placeholder="Enter todo"
                   value={todo}
                   onChange={(e) => {setTodo(e.target.value)}}/>
          </div>
          <div className="col-4 align-self-center">
            <button className="btn btn-primary" onClick={handleSubmit}>Add To-do</button>
          </div>
        </div>
        <div className="margin-top-20">
          {todos.map(todo => (
            <div className="row" key={todo._id}>
              <div className="col-1">
                <input type="checkbox" name={todo.todo} onChange={() => {handleCheck(todo._id)}}
                       checked={todo.done} className="form-check-input"/>
              </div>
              <div className="col">
                <label>{todo.todo}</label>
              </div>
            </div>
          ))}
        </div>
        <p className="error">{errorMsg}</p>
      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default App;
