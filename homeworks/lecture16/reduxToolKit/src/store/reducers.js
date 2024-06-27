import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDoList: [],
  markAll: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.toDoList.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.toDoList[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllTodo: (state) => {
      state.markAll = !state.markAll;
      state.toDoList = state.toDoList.map(todo => ({ ...todo, completed: state.markAll }));
    },
    clearCompleted: (state) => {
      state.toDoList = state.toDoList.filter(todo => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllTodo, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;