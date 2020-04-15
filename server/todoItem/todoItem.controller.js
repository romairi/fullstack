const _ = require('lodash');
const {STATUSES} = require('../constants');

const todoList = _.range(5).map(idx => ({
    id: `todo_id_${idx}`,
    title: `todo_title_${idx}`,
    status: Object.values(STATUSES)[_.random(0, 2)],
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
    };
    todoList.push(newItem);
    res.json(newItem);
}

function remove(req, res, next) {
    //TODO implement
}

function changeStatus(req, res, next) {
    //TODO implement
}

module.exports = {getItems, create, remove, changeStatus};
