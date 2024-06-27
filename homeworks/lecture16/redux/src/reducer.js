import { ADD_TODO, TOGGLE_TODO, CLEAR_TODOS, MARK_ALL_DONE } from './actionTypes';

const initialState = {
  todos: [],
  allDone: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todo: action.payload, done: state.allDone }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case CLEAR_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, done: false })),
        allDone: false,
      };
    case MARK_ALL_DONE:
      const newAllDone = !state.allDone;
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, done: newAllDone })),
        allDone: newAllDone,
      };
    default:
      return state;
  }
};

export default todoReducer;
