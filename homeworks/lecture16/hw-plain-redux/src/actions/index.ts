export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: new Date().getTime().toString(),
  check: false,
  text
});

export const toggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  id
});

export const toggleAll = (allCompleted: boolean) => ({
  type: 'TOGGLE_All',
  allCompleted
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED'
});


