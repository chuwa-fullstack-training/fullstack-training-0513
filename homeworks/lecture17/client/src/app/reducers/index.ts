import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../store.ts';

interface todoType {
  _id: string,
  done: boolean,
  todo: string
}

interface statusType {
  loading: boolean,
  error: string
}

const initialTodos: todoType[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: initialTodos,
    loading: false,
    error: ''
  },
  reducers: {
    addTodo: (state, action: PayloadAction<todoType>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<todoType>) => {
      const item = state.todos.find(item => item._id === action.payload._id);
      if (item) {
        item.done = action.payload.done;
      }
    },
    setTodos: (state, action: PayloadAction<todoType[]>) => {
      state.todos = action.payload;
    },
    updateStatus: (state, action: PayloadAction<statusType>) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const { addTodo, updateTodo,
  setTodos, updateStatus } = todoSlice.actions;

export const getAllTodos = () => async (dispatch: AppDispatch) => {
  dispatch(updateStatus({loading: true, error: ''}));
  try {
    const response = await fetch('/api/todos', {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setTodos(data));
      dispatch(updateStatus({loading: false, error: ''}));
    } else {
      dispatch(updateStatus({loading: false, error: 'Something wrong'}));
    }
  } catch (e) {
    dispatch(updateStatus({loading: false, error: e as string}));
  }
}

export const addOneTodo = (todo: {done: boolean, todo: string}) => async (dispatch: AppDispatch) => {
  dispatch(updateStatus({loading: true, error: ''}));
  try {
    const response = await fetch('/api/todos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(addTodo(data));
      dispatch(updateStatus({loading: false, error: ''}));
    } else {
      dispatch(updateStatus({loading: false, error: 'Something wrong'}));
    }
  } catch (e) {
    dispatch(updateStatus({loading: false, error: e as string}));
  }
}

export const updateOneTodo = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(updateStatus({loading: true, error: ''}));
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(updateTodo(data));
      dispatch(updateStatus({loading: false, error: ''}));
    } else {
      dispatch(updateStatus({loading: false, error: 'Something wrong'}));
    }
  } catch (e) {
    dispatch(updateStatus({loading: false, error: e as string}));
  }
}

export default todoSlice.reducer;