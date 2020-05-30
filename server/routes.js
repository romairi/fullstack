const express = require('express');
const todoItemRoutes = require('./todoItem/todoItem.route');
const userRoutes = require('./user/user.routes');


const router = express.Router();

router.use('/api/auth', userRoutes);
router.use('/api/todo_item', todoItemRoutes);

router.use('/', (req, res) => {
    const clientData = JSON.stringify({user: req.user});
    res.render('index.ejs', {clientData, debug: false})
});

module.exports = router;
