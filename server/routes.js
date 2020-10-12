const express = require('express');
const userRoutes = require('./user/user.routes');
const paperRoutes = require('./paper/routes');
const categoriesRoutes = require('./category/routes');
const searchesRoutes = require('./search/routes');
const {publicPath} = require('./configs/serverConfig');
const adminRoutes = require('./admin/routes');

const router = express.Router();

// api routes
router.use('/api/auth', userRoutes);
router.use('/api/papers', paperRoutes);
router.use('/api/categories', categoriesRoutes);
router.use('/api/searches', searchesRoutes);

// admin routes
router.use('/admin', adminRoutes);

// endpoints
router.use('/', (req, res) => {
    const clientData = JSON.stringify({user: req.user});
    res.render('index.ejs', {
        clientData,
        publicPath,
        scriptNonce: res.locals.scriptNonce,
        styleNonce: res.locals.styleNonce
    })
});

module.exports = router;
