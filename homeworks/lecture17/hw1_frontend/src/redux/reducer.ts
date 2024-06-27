/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { ListItemPropType } from "../ListItem"
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddTodoDataOutType, add_todo, delete_todo, sync_todo_list } from "./thunks"

export type StateType = {
    title_field_data: string,
    description_field_data: string,
    deadline_field_data: string,
    items: ListItemPropType[],
    error: null | string
}

const initialState: StateType = {
    title_field_data: "",
    description_field_data: "",
    deadline_field_data: "",
    items: [],
    error: null
}

const Slice = createSlice({
    name: "Slice",
    initialState: initialState,
    reducers: {
        set_title_field_data: (state: StateType, action: PayloadAction<string>) => {
            state.title_field_data = action.payload;
        },
        set_description_field_data: (state: StateType, action: PayloadAction<string>) => {
            state.description_field_data = action.payload;
        },
        set_deadline_field_data: (state: StateType, action: PayloadAction<string>) => {
            state.deadline_field_data = action.payload;
        },
    },
    extraReducers: (builder: any) => {
        builder
        .addCase(add_todo.fulfilled, (state: StateType, action: PayloadAction<AddTodoDataOutType>) => {
            state.items.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                created_time: new Date(action.payload.created_time),
                deadline: new Date(action.payload.deadline)
            })
        })
        .addCase(add_todo.rejected, (state: StateType, action: any) => {
            state.error = action.error.message;
        })
        .addCase(sync_todo_list.fulfilled, (state: StateType, action: PayloadAction<any>) => {
            state.items = action.payload.map((value: any) => {
                return {
                    id: value._id,
                    title: value.title,
                    description: value.description,
                    created_time: new Date(value.created_time),
                    deadline: new Date(value.deadline)
                }
            })
        })
        .addCase(sync_todo_list.rejected, (state: StateType, action: any) => {
            state.error = action.error.message;
        })
        .addCase(delete_todo.fulfilled, (state: StateType, action: PayloadAction<string>) => {
            for (let i = 0; i < state.items.length; ++i) {
                const ele: ListItemPropType = state.items[i];
                if (ele.id === action.payload) {
                    state.items.splice(i, 1);
                    break;
                }
            }
        })
        .addCase(delete_todo.rejected, (state: StateType, action: any) => {
            state.error = action.error.message;
        })
    }
});

export default Slice.reducer;
export const { set_title_field_data, set_description_field_data, set_deadline_field_data } = Slice.actions;