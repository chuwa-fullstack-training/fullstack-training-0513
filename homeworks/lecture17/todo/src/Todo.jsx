import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, fetchTodos, addTodo, toggleTodo } from "./slice/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);
  const remaining = todos?.filter((item) => !item.done).length;
  //   const remaining = 0;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(todo)).then(() => {
        dispatch(setTodo("")); // 清空输入框
      });
    }
  };

  const handleChange = (e) => {
    dispatch(setTodo(e.target.value));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Todos-ReactJs</h1>
      <input
        type="text"
        placeholder="Type a todo and hit Enter"
        value={todo}
        onKeyDown={handleKey}
        onChange={handleChange}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{remaining} remaining</p>
      </div>
      <div>
        {/* <input
          type="checkbox"
          checked={remaining === 0 && todos.length > 0}
          onChange={() => dispatch(toggleTodo())}
        />
        Mark All Done */}
      </div>
      {todos.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => dispatch(toggleTodo(item.id))}
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Todo;
