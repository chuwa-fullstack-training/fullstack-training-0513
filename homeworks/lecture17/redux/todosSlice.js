import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('/api/todos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
    const response = await axios.post('/api/todos', newTodo);
    return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
    const response = await axios.put(`/api/todos/${id}`);
    return response.data;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const index = state.items.findIndex(todo => todo._id === action.payload._id);
                state.items[index].done = action.payload.done;
            });
    },
});

export default todosSlice.reducer;
