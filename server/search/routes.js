const express = require('express');
const {saveLastSearch} = require("./controller");


router = express.Router();


router.post('/save_last_search', saveLastSearch);

module.exports = router;
