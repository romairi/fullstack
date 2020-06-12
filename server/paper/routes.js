const express = require('express');
const {getPapers, searchPapers, savePaper} = require('./controller');
const router = express.Router();

router.get('/get_papers', getPapers);
router.post('/search_papers', searchPapers);
router.post('/save_paper', savePaper);

module.exports = router;
