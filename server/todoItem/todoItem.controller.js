const _ = require('lodash');
const TodoItemModel = require('./todoItem.model');
const {STATUSES} = require('../constants');
const HttpStatus = require('http-status-codes');

let todoList = _.range(5).map(idx => ({
    id: `todo_id_${idx}`,
    title: `todo_title_${idx}`,
    status: Object.values(STATUSES)[_.random(0, 2)],
    date: (new Date()),
}));

async function getItems(req, res, next) {
    const todoItems = await TodoItemModel.find({});
    res.json(todoItems);
}

async function create(req, res, next) {
    const {title} = req.body;
    const todoItem = new TodoItemModel({
        title,
        status: STATUSES.TODO,
        date: new Date(),
    });

    try {
        const newItem = await todoItem.save();
        res.json(newItem);
    } catch (e) {
        next(e);
    }
}

async function remove(req, res, next) {
    const {todoId} = req.body;
    let msg = 'Todo_Item not deleted';
    let status = HttpStatus.BAD_REQUEST;
    let deletedCount;

    try {
        const deletedResponse = await TodoItemModel.deleteOne({_id: todoId});
        deletedCount = deletedResponse.deletedCount;
    } catch (err) {
        deletedCount = 0;
    }

    if (deletedCount > 0) {
        msg = 'Todo_Item deleted';
        status = HttpStatus.OK;
    }
    res.status(status).send(msg);
}

function changeStatus(req, res, next) {
    const {todoId, status} = req.body;
    const todoItem = _.find(todoList, item => item.id === todoId);
    const isSupportedStatus = _.find(Object.values(STATUSES), s => s === status);
    let resStatus = HttpStatus.BAD_REQUEST;
    if (todoItem && isSupportedStatus) {
        todoItem.status = status;
        resStatus = HttpStatus.OK;
    }
    res.status(resStatus).json(todoItem);
}

module.exports = {getItems, create, remove, changeStatus};