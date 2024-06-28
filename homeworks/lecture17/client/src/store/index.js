import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos";

const store = configureStore({
    reducer: {
        todos: todoSlice,
    }
})

export default store;