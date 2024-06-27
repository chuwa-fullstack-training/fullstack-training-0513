import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
