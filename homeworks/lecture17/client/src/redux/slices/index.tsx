import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface todoType {
  id: number,
  todo: string;
  isDone: boolean;
}

export interface todoState {
  todos: todoType[];
  loading: boolean;
  error: string | null;
}

const initialState: todoState = {
  todos: [],
  loading: false,
  error: null
};

const baseUrl = 'http://localhost:4000/api';

export const addTodo: any = createAsyncThunk(
  'todos/addTodo',
  async (todo: todoType) => {
    try {
      const response = await fetch(baseUrl + '/todos', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  }
);

export const getTodos: any = createAsyncThunk(
  'todos/getTodos',
  async () => {
    try {
      const response = await fetch(baseUrl, {
        method: 'GET',
        mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      });
      const data = await response.json();
      console.log(data);
      return await response.json();
    } catch (error) {
      return error;
    }
  }
);

export const updateTodo: any = createAsyncThunk(
  'todos/updateTodo',
  async (todo: todoType) => {
    try {
      const response = await fetch(baseUrl + '/todos/' + todo.id, {
        method: 'PUT',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.loading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        });
        state.loading = false;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});


export default todoSlice.reducer; 