import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/todoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
