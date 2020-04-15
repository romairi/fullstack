export const STATUSES = {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    DONE: 'done'
};

export const NAME_BY_STATUS = {
    [STATUSES.TODO]: 'todo',
    [STATUSES.IN_PROGRESS]: 'in progress',
    [STATUSES.DONE]: 'done',
};

export const AVAILABLE_STATUSES_BY_STATUS = {
    [STATUSES.TODO]: [STATUSES.IN_PROGRESS],
    [STATUSES.IN_PROGRESS]: [STATUSES.TODO, STATUSES.DONE],
    [STATUSES.DONE]: [STATUSES.IN_PROGRESS],
};

const TODO_ITEM_API_PATH = '/api/todo_item';
export const GET_TODO_ITEMS_PATH = `${TODO_ITEM_API_PATH}/get_items`;
export const CREATE_TODO_ITEM_PATH = `${TODO_ITEM_API_PATH}/create`;