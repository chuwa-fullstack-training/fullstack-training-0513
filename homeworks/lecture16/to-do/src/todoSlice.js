import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                name: action.payload,
                complete: false
            });
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.complete = !todo.complete;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        markAllComplete: (state) => {
            return state.map((todo) => ({...todo, complete: true}))
        },
        clearCompleted: (state) => {
            return state.map((todo) => ({...todo, complete: false}))
        }
    }
})
export const { addTodo, toggleComplete, removeTodo, markAllComplete, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;