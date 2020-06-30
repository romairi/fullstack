const express = require('express');
const {getCategories, searchPapers, savePaper, removePaper} = require('./controller');
const router = express.Router();

router.get('/get_categories', getCategories);
router.post('/search_papers', searchPapers);
router.post('/save_paper', savePaper);
router.post('/remove_paper', removePaper);

module.exports = router;
