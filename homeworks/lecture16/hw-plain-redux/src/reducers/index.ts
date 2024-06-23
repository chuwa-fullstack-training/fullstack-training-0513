import {combineReducers} from "redux";

interface todoType {
  id: string,
  check: boolean,
  text: string
}

const initialState: todoType[] = [];

const todo = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          check: action.check,
          text: action.text,
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(item => item.id === action.id ? {...item, check: !item.check} : item);
    case 'TOGGLE_All' :
      return state.map(item => ({...item, check: action.allCompleted}));
    case 'CLEAR_COMPLETED':
      return state.map(item => ({...item, check: false}));
    default:
      return [];
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer;