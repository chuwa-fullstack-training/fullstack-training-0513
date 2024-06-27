import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearCompleted: (state) => {
      return state.filter(todo => !todo.completed);
    },
    markAllDone: (state) => {
      return state.map(todo => ({ ...todo, completed: true }));
    }
  }
});

export const { addTodo, toggleTodo, clearCompleted, markAllDone } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;
