/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_URL } from '../config';

export type AddTodoDataInType = {
    title: string,
    description: string,
    deadline: string
}

export type AddTodoDataOutType = AddTodoDataInType & {
    id: string,
    created_time: string
}

// Define an async thunk
export const add_todo: AsyncThunk<any, any, any> = createAsyncThunk(
  'add_todo',
  async (data: AddTodoDataInType, thunkAPI) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(`${BACKEND_URL}/api/todo`, options);
    const rjson = await response.json();
    return {
        id: rjson.id,
        created_time: rjson.created_time,
        ...data
    };
  }
);

export const sync_todo_list: AsyncThunk<any, any, any> = createAsyncThunk(
    'sync_todo_list',
    async (_, thunkAPI) => {
      const options = {
          method: 'GET',
      };
      const response = await fetch(`${BACKEND_URL}/api/todo`, options);
      const rjson = await response.json();
      return rjson;
    }
);

export const delete_todo: AsyncThunk<any, any, any> = createAsyncThunk(
    'delete_todo',
    async (data: string, thunkAPI) => {
      const options = {
          method: 'DELETE'
      };
      const response = await fetch(`${BACKEND_URL}/api/todo/${data}`, options);
      return data;
    }
);
