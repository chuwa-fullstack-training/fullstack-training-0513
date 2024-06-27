// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const MARK_ALL_TODO = 'MARK_ALL_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// Action creators
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, payload: index });
export const markAllTodo = () => ({ type: MARK_ALL_TODO });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });