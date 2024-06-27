/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ADD_TODO_LIST, MARK_ALL_DONE, TOGGLE_DONE, CLEAR_DONE, CHANGE_INPUT_DATA, TOGGLE_ALL_DONE_CHECKED } from "./action_types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// function copystate(state: StateType) {
//     return {...state};
// }

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

export const Slice = createSlice({
    name: "Slice",
    initialState: initial_state,
    reducers: {
        add_todo_list: (state: StateType) => {
            state.todolist_data.push({content: state.input_data, done: false});
            ++state.num_remaining;
        },
        mark_all_done: (state: StateType) => {
            for (const ele of state.todolist_data) {
                ele.done = true;
            }
            state.num_remaining = 0;
        },
        toggle_done: (state: StateType, action: PayloadAction<number>) => {
            if (state.todolist_data[action.payload].done) {
                ++state.num_remaining;
            } else {
                --state.num_remaining;
            }
            state.todolist_data[action.payload].done = !state.todolist_data[action.payload].done;
        },
        clear_done: (state: StateType) => {
            // const newlist = []
            // for (const ele of state.todolist_data) {
            //     if (!ele.done) {
            //         newlist.push(ele);
            //     }
            // }
            // state.todolist_data = newlist;
            for (const ele of state.todolist_data) {
                ele.done = false;
            }
            state.num_remaining = state.todolist_data.length;
            state.all_done_checked = false;
        },
        change_input_data: (state: StateType, action: PayloadAction<string>) => {
            state.input_data = action.payload;
        },
        toggle_all_done_checked: (state: StateType) => {
            state.all_done_checked = !state.all_done_checked;
        }
    }
})

export const { add_todo_list, mark_all_done, toggle_done, clear_done, change_input_data, toggle_all_done_checked } = Slice.actions

export default Slice.reducer
// export default function reducer(state: StateType = initial_state, action: any) {
//     switch (action.type) {
//         case ADD_TODO_LIST: {
//             const res = copystate(state);
//             res.todolist_data.push({content: res.input_data, done: false});
//             ++res.num_remaining;
//             return res;
//         }
//         case MARK_ALL_DONE: {
//             const res = copystate(state);
//             for (const ele of res.todolist_data) {
//                 ele.done = true;
//             }
//             res.num_remaining = 0;
//             return res;
//         }
//         case TOGGLE_DONE: {
//             const res = copystate(state);
//             if (res.todolist_data[action.index].done) {
//                 ++res.num_remaining;
//             } else {
//                 --res.num_remaining;
//             }
//             res.todolist_data[action.index].done = !res.todolist_data[action.index].done;
//             return res;
//         }
//         case CLEAR_DONE: {
//             const res = copystate(state);
//             const newlist = []
//             for (const ele of res.todolist_data) {
//                 if (!ele.done) {
//                     newlist.push(ele);
//                 }
//             }
//             res.todolist_data = newlist;
//             return res;
//         }
//         case CHANGE_INPUT_DATA: {
//             const res = copystate(state);
//             res.input_data = action.data;
//             return res;
//         }
//         case TOGGLE_ALL_DONE_CHECKED: {
//             const res = copystate(state);
//             res.all_done_checked = !res.all_done_checked;
//             return res;
//         }
//         default: return state
//     }
// }  