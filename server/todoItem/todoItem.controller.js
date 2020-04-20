const _ = require('lodash');
const {STATUSES} = require('../constants');

let todoList = _.range(5).map(idx => ({
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
    let msg = 'Todo_Item not deleted';
    const {todoId} = req.body;
    console.log(todoId);
    if (todoId) {
        msg = 'Todo_Item deleted';
        todoList = todoList.filter(elm => elm.id !== todoId);
        res.status(200)
    }
    res.json(todoId);
}

function changeStatus(req, res, next) {
    const {todoId, status} = req.body;
    const todoItem = _.find(todoList, item => item.id === todoId);
    let msg = 'The status not changed';
    if(todoItem){
        todoItem.status = status;
        msg = 'The status changed';
    }
    res.send(msg);
}

module.exports = {getItems, create, remove, changeStatus};
