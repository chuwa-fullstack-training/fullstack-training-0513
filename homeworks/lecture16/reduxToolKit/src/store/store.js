import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;