const express = require('express');
const {removeCategory} = require("./controller");
const {addCategory} = require('./controller');
const router = express.Router();

router.post('/add_category', addCategory);
router.post('/remove_category', removeCategory);

module.exports = router;
