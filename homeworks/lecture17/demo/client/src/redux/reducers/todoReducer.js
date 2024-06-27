import {
  FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE,
  CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE,
  DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE
} from '../actions/todoActions';

const initialState = {
  loading: false,
  todos: [],
  error: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
    case CREATE_TODO_REQUEST:
    case TOGGLE_TODO_REQUEST:
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map(todo =>
          todo._id === action.payload._id ? action.payload : todo
        )
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
    case FETCH_TODOS_FAILURE:
    case CREATE_TODO_FAILURE:
    case TOGGLE_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
