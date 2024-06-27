import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

// Create async thunks
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:7766/api/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo: string) => {
  const response = await axios.post('http://localhost:7766/api/todos', { todo, done: false });
  return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id: number) => {
  const response = await axios.get(`http://localhost:7766/api/todos/${id}`);
  const updatedTodo = { ...response.data, done: !response.data.done };
  await axios.put(`/api/todos/${id}`, updatedTodo);
  return updatedTodo;
});

export const markAllCompleted = createAsyncThunk('todos/markAllCompleted', async (_, { getState }) => {
  const state = getState() as RootState;
  const updatedTodos = state.todos.todos.map(todo => ({ ...todo, done: true }));
  await Promise.all(updatedTodos.map(todo => axios.put(`http://localhost:7766/api/todos/${todo.id}`, todo)));
  return updatedTodos;
});

export const clearCompleted = createAsyncThunk('todos/clearCompleted', async (_, { getState }) => {
  const state = getState() as RootState;
  const completedTodos = state.todos.todos.filter(todo => todo.done);
  await Promise.all(completedTodos.map(todo => axios.delete(`http://localhost:7766/api/todos/${todo.id}`)));
  return state.todos.todos.filter(todo => !todo.done);
});

// Create a slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch todos';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(markAllCompleted.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(clearCompleted.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

// Create the store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
