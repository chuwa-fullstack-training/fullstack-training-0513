// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        newTodo: ''
    },
    reducers: {
        addTodo: (state) => {
            if (state.newTodo.trim()) {
                state.todos.push({ text: state.newTodo, completed: false });
                state.newTodo = '';
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos[action.payload];
            todo.completed = !todo.completed;
        },
        markAllDone: (state) => {
            state.todos.forEach(todo => {
                todo.completed = true;
            });
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        setNewTodo: (state, action) => {
            state.newTodo = action.payload;
        }
    }
});

export const { addTodo, toggleTodo, markAllDone, clearCompletedTodos, setNewTodo } = todosSlice.actions;
export default todosSlice.reducer;
