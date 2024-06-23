import {connect} from "react-redux";
import {addTodo, toggleTodo, toggleAll, clearCompleted} from "./actions";
import {AppDispatch, RootState} from "./store.ts";
import TodoList from "./TodoList.tsx";

interface todoType {
  id: string,
  check: boolean,
  text: string
}

const mapStateToProps = (state: RootState) => ({
  list: state.todo as todoType[]
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTodo: (text: string): void => dispatch(addTodo(text)),
  toggleTodo: (id: string): void => dispatch(toggleTodo(id)),
  toggleAll: (allCompleted: boolean): void => dispatch(toggleAll(allCompleted)),
  clearCompleted: (): void => dispatch(clearCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);