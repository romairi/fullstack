import {
    ADD_TODO_ITEM_ACTION_TYPE,
    SET_TODOS_ACTION_TYPE,
    REMOVE_TODO_ITEM_ACTION_TYPE
} from "./constants";

export function createSetTodosAction(todos) {
    return {
        type: SET_TODOS_ACTION_TYPE,
        payload: todos,
    }
}

export function createAddTodoItemAction(todoItem) {
    return {
        type: ADD_TODO_ITEM_ACTION_TYPE,
        payload: todoItem,
    }
}

export function removeTodoItemAction(todoItemId) {
    return {
        type: REMOVE_TODO_ITEM_ACTION_TYPE,
        payload: todoItemId,
    }
}