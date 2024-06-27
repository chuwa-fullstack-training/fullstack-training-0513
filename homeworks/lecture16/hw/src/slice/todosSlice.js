import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todo: "",
    todos: [],
  },
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state) => {
      state.todos.push({ name: state.todo, completed: false });
      state.todo = "";
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: false,
      }));
    },
    markAllDone: (state) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed: true,
      }));
    },
  },
});

export const { setTodo, addTodo, toggleTodo, clearCompleted, markAllDone } =
  todosSlice.actions;

export default todosSlice.reducer;
