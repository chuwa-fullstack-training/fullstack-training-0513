import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => 
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    case 'MARK_ALL_DONE':
      return {
        ...state,
        todos: state.todos.map(todo => ({ ...todo, completed: true })),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
