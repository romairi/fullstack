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

//
function remove(req, res, next) {
    debugger
    let msg = 'Todo_Item not deleted';
    const {todoId} = req.body;
    console.log(todoId);
    if(todoId) {
        msg = 'Todo_Item deleted';

       todoList = todoList.filter(elm => elm.id !== todoId);
    }
    res.json(todoId);
}

//
// function remove(req, res, next) {
//
//     const {todoId} = req.body;
//     if (todoId) {
//         const item = todoList._find(todoId);
//         if (item) {
//             todoList = todoList.filter(elm => elm.id !== todoId);
//             res.status(200).send('todo_item: ' + item + 'was deleted');
//         }
//         res.status(500).send('There was a problem deleting the item');
//     }
//
// }


function changeStatus(req, res, next) {
    //TODO implement
}

module.exports = {getItems, create, remove, changeStatus};
