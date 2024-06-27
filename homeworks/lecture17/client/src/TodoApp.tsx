import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store, { fetchTodos } from './store';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoActions from './TodoActions';
import './App.css';

const TodoApp: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoActions />
      <TodoList />
    </div>
  );
};

const WrappedTodoApp = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default WrappedTodoApp;
