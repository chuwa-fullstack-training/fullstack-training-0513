import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/todos");
  console.log("response", response);
  return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post("http://localhost:3000/todos", { todo });
  return response.data;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (id) => {
  const response = await axios.put(`http://localhost:3000/todos/${id}`);
  return response.data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todo: "",
    todos: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );
        state.todos[index] = action.payload;
      });
  },
});

export const { setTodo } = todosSlice.actions;

export default todosSlice.reducer;
