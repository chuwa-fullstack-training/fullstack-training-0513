import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface todoType {
  id: string,
  check: boolean,
  text: string
}

const initialState: todoType[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const item = {
        id: new Date().getTime().toString(),
        check: false,
        text: action.payload
      };
      state.push(item);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.check = !item.check;
      }
    },
    toggleAll: (state, action: PayloadAction<boolean>) => {
      for (let item of state) {
        item.check = action.payload;
      }
    },
    clearCompleted: state => {
      for (let item of state) {
        item.check = false;
      }
    }
  },
});

export const { addTodo, toggleTodo, toggleAll, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;