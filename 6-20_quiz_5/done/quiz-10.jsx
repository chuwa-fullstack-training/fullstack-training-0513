/*

  Remove tasks from the Todo List upon clicking the "Delete" button.

*/


































import { useState } from "react";


const App = () => {

  const [inputData, setInputData] = useState();
  const [todoList, setTodoList] = useState([]);

  const onClickSubmit = () => {
    setTodoList([...todoList, inputData]);
  }

  const onClickDelete = index => {
    // setTodoList([...todoList].filter((ele, idx) => idx !== index));
    // const newA = [...todoList];
    // newA.splice(index, 1);
    // setTodoList(newA);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
        <div>
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {/* <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li> */}
        {todoList.map((ele, index) => {
          return (
            <>
              <li key={ele}>{ele}</li>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default App;