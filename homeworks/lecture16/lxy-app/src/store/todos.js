import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: '0', name: 'first', done: false },
            { id: '1', name: 'work', done: true }
        ],
        allCompleted: false
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
            state.todos.forEach( task => {task.done = true});
            state.allCompleted = true;
        },
        clearAllDone(state) {
            state.todos.forEach( task => {task.done = false});
            state.allCompleted = false;
        }
    }
})

export const { addTodo, updateTodo, markAllDone, clearAllDone } = todoSlice.actions;
export default todoSlice.reducer;