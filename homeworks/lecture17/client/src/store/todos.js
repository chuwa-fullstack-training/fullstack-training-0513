import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = "http://localhost:8080/api";


// get all
export const fetchTodosAsync = createAsyncThunk("todos/fetchTodos", async () => {
    try {
        const res = await fetch(url, {
            method: 'GET'
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err.message);
    }
});
// add todo
export const addTodoAsync = createAsyncThunk('todos/addTodo', async (todo) => {
    try {
        const res = await fetch(url, {
            method: 'POST'
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err.message);
    }
}
);
// update todo
export const updateTodoAsync = createAsyncThunk('todos/updateTodo', async (id) => {
    try {
        const res = await fetch(url + '/' + id, {
            method: 'PUT',
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err.message);
    }
}
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        allCompleted: false,
        status: "idle",
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        updateTodo(state, action) {
            const idx = action.payload;
            const isDone = state.todos[idx].done;
            state.todos[idx].done = !isDone;
        },
        markAllDone(state) {
            state.todos.forEach(task => { task.done = true });
            state.allCompleted = true;
        },
        clearAllDone(state) {
            state.todos.forEach(task => { task.done = false });
            state.allCompleted = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = "succeeded";
        });
        builder.addCase(fetchTodosAsync.pending, (state, action) => {
            state.status = "pending";
        });
        builder.addCase(fetchTodosAsync.rejected, (state, action) => {
            state.status = "failed";
        });
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
    },
})

export const { addTodo, updateTodo, markAllDone, clearAllDone } = todoSlice.actions;
export default todoSlice.reducer;