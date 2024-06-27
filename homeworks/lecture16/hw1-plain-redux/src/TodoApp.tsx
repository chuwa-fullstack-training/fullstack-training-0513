import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoActions from './TodoActions';

const TodoApp: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <h1>Todo List</h1>
        <TodoInput />
        <TodoActions />
        <TodoList />
      </div>
    </Provider>
  );
};

export default TodoApp;
