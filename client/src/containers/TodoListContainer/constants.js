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