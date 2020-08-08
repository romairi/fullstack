const express = require('express');
const {saveLastSearch} = require("./controller");
const {removeLastSearch} = require('./controller');

router = express.Router();


router.post('/save_last_search', saveLastSearch);
router.post('/remove_last_search', removeLastSearch);

module.exports = router;
