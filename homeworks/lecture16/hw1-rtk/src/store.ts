import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

// Create a slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllCompleted: (state) => {
      state.todos.forEach(todo => {
        todo.completed = true;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } = todoSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
