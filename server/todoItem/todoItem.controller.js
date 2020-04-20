const _ = require('lodash');
const {STATUSES} = require('../constants');

let todoList = _.range(5).map(idx => ({
    id: `todo_id_${idx}`,
    title: `todo_title_${idx}`,
    status: Object.values(STATUSES)[_.random(0, 2)],
    date: (new Date()),
}));

let todo_id = 100;

function getItems(req, res, next) {
    res.json(todoList);
}

function create(req, res, next) {
    const {title} = req.body;
    todo_id++;
    const newItem = {
        id: `todo_id_${todo_id}`,
        title: title,
        status: STATUSES.TODO,
        date: (new Date()),
    };
    todoList.push(newItem);
    res.json(newItem);
}


function remove(req, res, next) {
    const {todoId} = req.body;
    let msg = 'Todo_Item not deleted';
    let status = 400;

    const todoItem = _.find(todoList, todoItem => todoItem.id === todoId);

    if (todoItem) {
        msg = 'Todo_Item deleted';
        status = 200;
        todoList = todoList.filter(elm => elm.id !== todoId);
    }

    res.status(status).send(msg);
}

function changeStatus(req, res, next) {
    const {todoId, status} = req.body;
    const todoItem = _.find(todoList, item => item.id === todoId);
    const isSupportedStatus = _.find(Object.values(STATUSES), s => s === status);
    let resStatus = 400;
    if (todoItem && isSupportedStatus) {
        todoItem.status = status;
        resStatus = 200;
    }
    res.status(resStatus).json(todoItem);
}

module.exports = {getItems, create, remove, changeStatus};
