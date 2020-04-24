import {SORT_ORDER_BY_STATUS} from "../constants";

export function filterTodoItemById(todoList, todoId) {
    return todoList.filter(todo => todo._id !== todoId)
}

export function sortTodoItems(todoItems) {
    todoItems.sort((todoItem1, todoItem2) => {
        let res = SORT_ORDER_BY_STATUS[todoItem1.status] - SORT_ORDER_BY_STATUS[todoItem2.status];

        if (res === 0) {
            res = (new Date(todoItem1.date)).getTime() - (new Date(todoItem2.date)).getTime();
        }

        return res;
    });
    return todoItems;
}