import { createStore } from 'redux';
import reducer from "./reducer.ts"

export type StateType = {
    input_data: string,
    todolist_data: {
        content: string,
        done: boolean
    }[],
    num_remaining: number,
    all_done_checked: boolean
}

export const initial_state = {
    input_data: "",
    todolist_data: [], // { content: string, done: bool}[]
    num_remaining: 0,
    all_done_checked: false
}

const store = createStore(reducer);

export default store;