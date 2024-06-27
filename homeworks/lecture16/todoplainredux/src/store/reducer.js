const initialState = {
  todos: [],
  newTodo: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NEW_TODO':
      return {
        ...state,
        newTodo: action.payload,
      };
    case 'ADD_TODO':
      if (state.newTodo.trim() === '') {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, { text: state.newTodo, completed: false}],
        newTodo: '',
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.payload) {
            return {
              ...todo, completed: !todo.completed
            }
          }
          return todo;
        }),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case 'MARK_ALL_DONE':
      return {
        ...state,
        todos: state.todos.map((todo) => ({...todo, completed: true})),
      };
    default:
      return state;
  }
};

export default reducer;