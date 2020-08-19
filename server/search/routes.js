const express = require('express');
const {addSearch, removeSearch} = require("./controller");
const router = express.Router();

router.post('/add_search', addSearch);
router.post('/remove_search', removeSearch);

module.exports = router;
