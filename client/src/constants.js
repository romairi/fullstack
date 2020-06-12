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

export const SORT_ORDER_BY_STATUS = {
    [STATUSES.TODO]: 2,
    [STATUSES.IN_PROGRESS]: 1,
    [STATUSES.DONE]: 3,
};

const BASE_API_PATH = '/api';

// AUTH API
const AUTH_PATH = `${BASE_API_PATH}/auth`;
export const LOGIN_PATH = `${AUTH_PATH}/login`;
export const SIGNUP_PATH = `${AUTH_PATH}/signup`;
export const LOGOUT_PATH = `${AUTH_PATH}/logout`;

// TODO_ITEM API
const TODO_ITEM_API_PATH = `${BASE_API_PATH}/todo_item`;
export const GET_TODO_ITEMS_PATH = `${TODO_ITEM_API_PATH}/get_items`;
export const CREATE_TODO_ITEM_PATH = `${TODO_ITEM_API_PATH}/create`;
export const REMOVE_TODO_ITEM_PATH = `${TODO_ITEM_API_PATH}/remove`;
export const CHANGE_STATUS_TODO_ITEM_PATH = `${TODO_ITEM_API_PATH}/change_status`;

// PAPERS API
const PAPERS_API_PATH = `${BASE_API_PATH}/papers`;
export const GET_PAPERS_PATH = `${PAPERS_API_PATH}/get_papers`;
export const SEARCH_PAPERS_PATH = `${PAPERS_API_PATH}/search_papers`;
