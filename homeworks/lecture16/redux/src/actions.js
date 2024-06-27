import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_TODOS,
  MARK_ALL_DONE,
} from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});

export const markAllDone = () => ({
  type: MARK_ALL_DONE,
});
