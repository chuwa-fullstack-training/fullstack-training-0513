import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    clearTodos: (state) => {
      return state.filter((todo) => !todo.done);
    },
    markAllDone: (state, action) => {
      const done = action.payload;
      return state.map((todo) => ({ ...todo, done }));
    },
    toggleTodo: (state, action) => {
      const index = action.payload;
      state[index].done = !state[index].done;
    },
  },
});

export const { addTodo, clearTodos, markAllDone, toggleTodo } =
  todosSlice.actions;

export const selectTodos = (state) => state.todos;
export const selectRemainingTodosCount = (state) =>
  state.todos.filter((todo) => !todo.done).length;

export default todosSlice.reducer;
