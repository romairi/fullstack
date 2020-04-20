import {SORT_ORDER_BY_STATUS} from "../constants";

export function filterTodoItemById(todoList, todoId) {
    return todoList.filter(todo => todo.id !== todoId)
}

export function sortTodoItems(todoItems) {
    todoItems.sort((todoItem1, todoItem2) => {
        return SORT_ORDER_BY_STATUS[todoItem1.status] - SORT_ORDER_BY_STATUS[todoItem2.status];
    });
    return todoItems;
}