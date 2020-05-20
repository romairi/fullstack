const express = require('express');
const path = require('path');
const todoItemRoutes = require('./todoItem/todoItem.route');
const userRoutes = require('./user/user.routes');


const router = express.Router();

router.use('/api/auth', userRoutes);
router.use('/api/todo_item', todoItemRoutes);

router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;
