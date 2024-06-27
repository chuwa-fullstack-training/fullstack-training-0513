/*

 You're given some existing HTML for a Todo List app. Add the following functionality to the app:

  Add new tasks on clicking the "Submit" button.
  The <input> field should be cleared upon successful addition.
  
*/


const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        <li>
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
        </li>
      </ul>
    </div>
  );
}

export default App;
