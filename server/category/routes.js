const express = require('express');
const {addCategory} = require('./controller');
const router = express.Router();

router.post('/add_category', addCategory);

module.exports = router;
