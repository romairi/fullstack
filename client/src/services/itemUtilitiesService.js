export function filterTodoItemById(todoList, todoId) {
    return todoList.filter(todo => todo.id !== todoId)
}