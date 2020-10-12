const express = require('express');
const kue = require('kue');
// const {createProxyMiddleware} = require('http-proxy-middleware');
const {isAdmin} = require('../user/user.middleware');

const router = express.Router();

router.use(isAdmin);
router.use('/kue-api/', kue.app);
// router.use('/admin-mongo/', createProxyMiddleware({
//     target: 'http://admin-mongo:8080',
//     // changeOrigin: true,
//     pathRewrite: {
//         '^/jquery': '/admin/admin-mongo'
//     }
// }));

module.exports = router;
