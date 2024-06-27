import { createAction } from '@reduxjs/toolkit';

// Action Types
export const SET_NEW_TODO = 'SET_NEW_TODO';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const MARK_ALL_DONE = 'MARK_ALL_DONE';

// Action Creators
export const setNewTodo = createAction(SET_NEW_TODO);
export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const clearCompleted = createAction(CLEAR_COMPLETED);
export const markAllDone = createAction(MARK_ALL_DONE);
