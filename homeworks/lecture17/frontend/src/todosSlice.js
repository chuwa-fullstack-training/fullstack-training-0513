import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/toDo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  const todo = response.data;
  const updatedTodo = await axios.put(`${API_URL}/${id}`, { ...todo, completed: !todo.completed });
  return updatedTodo.data;
});

export const clearCompleted = createAsyncThunk('todos/clearCompleted', async () => {
  const todos = await axios.get(API_URL);
  const completedTodos = todos.data.filter(todo => todo.completed);
  await Promise.all(completedTodos.map(todo => axios.delete(`${API_URL}/${todo._id}`)));
  return completedTodos.map(todo => todo._id);
});

export const markAllDone = createAsyncThunk('todos/markAllDone', async () => {
  const todos = await axios.get(API_URL);
  const updatedTodos = await Promise.all(todos.data.map(todo => axios.put(`${API_URL}/${todo._id}`, { ...todo, completed: true })));
  return updatedTodos.map(todo => todo.data);
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(clearCompleted.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => !action.payload.includes(todo._id));
      })
      .addCase(markAllDone.fulfilled, (state, action) => {
        action.payload.forEach(updatedTodo => {
          const index = state.items.findIndex(todo => todo._id === updatedTodo._id);
          if (index !== -1) {
            state.items[index] = updatedTodo;
          }
        });
      });
  }
});

export default todosSlice.reducer;
