const express = require('express');
const todoItemRoutes = require('./todoItem/todoItem.route');
const userRoutes = require('./user/user.routes');
const paperRoutes = require('./paper/routes');
const categoriesRoutes = require('./category/routes');
const {privateMiddleware} = require('./user/user.middleware');


const router = express.Router();

router.use('/api/auth', userRoutes);
router.use('/api/todo_item', privateMiddleware, todoItemRoutes);
router.use('/api/papers', paperRoutes);
router.use('/api/categories', categoriesRoutes);

router.use('/', (req, res) => {
    const clientData = JSON.stringify({user: req.user});
    res.render('index.ejs', {clientData, debug: false})
});

module.exports = router;
