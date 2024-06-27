import { createReducer } from '@reduxjs/toolkit';
import {
  SET_NEW_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  MARK_ALL_DONE
} from './actions';

// Initial State
const initialState = {
  todos: [],
  newTodo: ''
};

// Reducer
const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_NEW_TODO, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(ADD_TODO, (state) => {
      if (state.newTodo.trim() !== '') {
        state.todos.push({ text: state.newTodo, completed: false });
        state.newTodo = '';
      }
    })
    .addCase(TOGGLE_TODO, (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(CLEAR_COMPLETED, (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    })
    .addCase(MARK_ALL_DONE, (state) => {
      state.todos.forEach(todo => {
        todo.completed = true;
      });
    });
});

export default todoReducer;
