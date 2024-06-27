import { ADD_TODO_LIST, MARK_ALL_DONE, TOGGLE_DONE, CLEAR_DONE, CHANGE_INPUT_DATA, TOGGLE_ALL_DONE_CHECKED } from "./action_types";

export function createAddTodoListAction() {
    return {
        type: ADD_TODO_LIST
    };
}

export function createToggleDoneAction(index: number) {
    return {
        type: TOGGLE_DONE,
        index: index
    };
}

export function createMarkAllDoneAction() {
    return {
        type: MARK_ALL_DONE
    }
}

export function createClearDoneAction() {
    return {
        type: CLEAR_DONE
    }
}

export function createChangeInputDataAction(newInputData: string) {
    return {
        type: CHANGE_INPUT_DATA,
        data: newInputData
    }
}

export function createToggleAllDoneCheckedAction() {
    return {
        type: TOGGLE_ALL_DONE_CHECKED
    }
}