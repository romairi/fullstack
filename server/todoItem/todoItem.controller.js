const _ = require('lodash');
const TodoItemModel = require('./todoItem.model');
const {STATUSES} = require('../constants');

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
    let status = 400;
    const todoItems = await TodoItemModel.remove({_id: todoId});
    if (todoItems) {
        msg = 'Todo_Item deleted';
        status = 200;
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
