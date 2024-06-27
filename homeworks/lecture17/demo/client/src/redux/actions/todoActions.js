import axios from 'axios';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';

export const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

const API_URL = 'http://localhost:5001/api/todos';

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_REQUEST });
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const createTodo = (todo) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_TODO_REQUEST });
    try {
      const response = await axios.post(API_URL, { todo });
      dispatch({ type: CREATE_TODO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_TODO_FAILURE, payload: error.message });
    }
  };
};

export const toggleTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_TODO_REQUEST });
    try {
      const response = await axios.put(`${API_URL}/${id}`);
      dispatch({ type: TOGGLE_TODO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: TOGGLE_TODO_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_TODO_REQUEST });
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_TODO_FAILURE, payload: error.message });
    }
  };
};
