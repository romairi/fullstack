const express = require('express');
const {getPapers, searchPapers} = require('./controller');
const router = express.Router();

router.get('/get_papers', getPapers);
router.post('/search_papers', searchPapers);

module.exports = router;
