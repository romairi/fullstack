const express = require('express');
const {getPapers, fetchPapers} = require('./controller');
const router = express.Router();

router.get('/get_papers', getPapers);
router.post('/fetch_papers', fetchPapers);

module.exports = router;
