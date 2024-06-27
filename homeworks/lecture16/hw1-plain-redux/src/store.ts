import { createStore } from 'redux';

// Define action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const MARK_ALL_COMPLETED = 'MARK_ALL_COMPLETED';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// Define action creators
export const addTodo = (text: string) => ({ type: ADD_TODO, payload: text });
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const markAllCompleted = () => ({ type: MARK_ALL_COMPLETED });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });

// Define the initial state
const initialState = {
  todos: [] as { id: number; text: string; completed: boolean }[],
};

// Define the reducer
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: true })),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
