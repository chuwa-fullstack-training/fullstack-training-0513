export const setNewTodo = (text) => ({
  type: 'SET_NEW_TODO',
  payload: text,
});

export const addTodo = () => ({
  type: 'ADD_TODO',
});

export const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  payload: index,
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED'
});

export const markAllDone = () => ({
  type: 'MARK_ALL_DONE',
});



