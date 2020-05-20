const _ = require('lodash');
const TodoItemModel = require('./todoItem.model');
const {STATUSES} = require('../constants');
const HttpStatus = require('http-status-codes');

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

async function changeStatus(req, res, next) {
    const {todoId, status} = req.body;
    const isSupportedStatus = _.find(Object.values(STATUSES), s => s === status);
    let resStatus = HttpStatus.BAD_REQUEST;

    if (!isSupportedStatus) {
        res.status(resStatus);
        return;
    }

    try {
        const todoItem = await TodoItemModel.findById(todoId);

        if (todoItem) {
            todoItem.status = status;
            await todoItem.save();
            resStatus = HttpStatus.OK;
        }

        res.status(resStatus).json(todoItem);
    } catch (err) {
        next(err);
    }
}

module.exports = {getItems, create, remove, changeStatus};