const express = require('express');
const userRoutes = require('./user/user.routes');
const paperRoutes = require('./paper/routes');
const categoriesRoutes = require('./category/routes');
const {publicPath} = require('./configs/serverConfig');


const router = express.Router();

router.use('/api/auth', userRoutes);
router.use('/api/papers', paperRoutes);
router.use('/api/categories', categoriesRoutes);

router.use('/', (req, res) => {
    const clientData = JSON.stringify({user: req.user});
    res.render('index.ejs', {clientData, publicPath})
});

module.exports = router;
