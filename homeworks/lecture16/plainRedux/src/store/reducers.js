import { ADD_TODO, TOGGLE_TODO, MARK_ALL_TODO, CLEAR_COMPLETED } from './actions';

// Initial state
const initialState = {
  toDoList: [],
  markAll: false,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, { text: action.payload, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case MARK_ALL_TODO: {
      const markAll = !state.markAll;
      return {
        ...state,
        toDoList: state.toDoList.map((todo) => ({ ...todo, completed: markAll })),
        markAll,
      };
    }
    case CLEAR_COMPLETED:
      return {
        ...state,
        toDoList: state.toDoList.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};

export default reducer;