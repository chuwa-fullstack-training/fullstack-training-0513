// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer.ts"

const store = configureStore({
    reducer: reducer
})

export default store;