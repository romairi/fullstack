const express = require('express');
const {getItems, create, remove, changeStatus} = require('./todoItem.controller');
const router = express.Router();

router.get('/get_items', getItems);
router.post('/create', create);
router.post('/remove', remove);
router.post('/change_status', changeStatus);

module.exports = router;