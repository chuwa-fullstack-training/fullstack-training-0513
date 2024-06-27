import axios from "axios";

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: "TODOS_START" });

    const { data } = await axios.get("http://localhost:8000/api/todos");

    dispatch({
      type: "TODOS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TODOS_FAIL",
      payload: error.response?.data?.message || "Faild to get todos",
    });
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: "TODO_CREATE_START" });
    const { data } = await axios.post("http://localhost:8000/api/todos", {
      todo,
    });
    dispatch({
      type: "TODO_CREATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "TODO_CREATE_FAIL",
      payload: error.response?.data?.message || "Faild to create todo",
    });
  }
};

export const updateTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "TODO_UPDATE_START" });

    const { data } = await axios.put(`http://localhost:8000/api/todos/${id}`);

    dispatch({
      type: "TODO_UPDATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "TODO_UPDATE_FAIL",
      payload: error.response?.data?.message || "Faild to update todo",
    });
  }
};
