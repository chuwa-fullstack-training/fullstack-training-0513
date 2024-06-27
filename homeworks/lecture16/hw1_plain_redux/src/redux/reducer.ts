import { initial_state, StateType } from "./store"
import { ADD_TODO_LIST, MARK_ALL_DONE, TOGGLE_DONE, CLEAR_DONE, CHANGE_INPUT_DATA, TOGGLE_ALL_DONE_CHECKED } from "./action_types.ts";

function copystate(state: StateType) {
    return {...state};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function reducer(state: StateType = initial_state, action: any) {
    switch (action.type) {
        case ADD_TODO_LIST: {
            const res = copystate(state);
            res.todolist_data.push({content: res.input_data, done: false});
            ++res.num_remaining;
            return res;
        }
        case MARK_ALL_DONE: {
            const res = copystate(state);
            for (const ele of res.todolist_data) {
                ele.done = true;
            }
            res.num_remaining = 0;
            return res;
        }
        case TOGGLE_DONE: {
            const res = copystate(state);
            if (res.todolist_data[action.index].done) {
                ++res.num_remaining;
            } else {
                --res.num_remaining;
            }
            res.todolist_data[action.index].done = !res.todolist_data[action.index].done;
            return res;
        }
        case CLEAR_DONE: {
            const res = copystate(state);
            for (const ele of res.todolist_data) {
                ele.done = false;
            }
            res.num_remaining = res.todolist_data.length;
            res.all_done_checked = false;
            return res;
        }
        case CHANGE_INPUT_DATA: {
            const res = copystate(state);
            res.input_data = action.data;
            return res;
        }
        case TOGGLE_ALL_DONE_CHECKED: {
            const res = copystate(state);
            res.all_done_checked = !res.all_done_checked;
            return res;
        }
        default: return state
    }
}  