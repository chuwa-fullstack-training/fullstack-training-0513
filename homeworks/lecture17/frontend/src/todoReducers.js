export const todoReducer = (state = { todos: [], error: null }, action) => {
  switch (action.type) {
    case "TODOS_START":
      return { loading: true, todos: [], error: null };
    case "TODOS_SUCCESS":
      return { loading: false, todos: action.payload };
    case "TODOS_FAIL":
      return { loading: false, error: action.payload };
    case "TODO_CREATE_START":
      return { ...state, loading: true, error: null };
    case "TODO_CREATE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        todos: [...state.todos, action.payload],
        error: null,
      };
    case "TODO_CREATE_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "TODO_UPDATE_START":
      return { ...state, loading: true, error: null };
    case "TODO_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
        error: null,
      };
    case "TODO_UPDATE_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
