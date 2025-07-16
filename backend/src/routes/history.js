const express = require('express');
const router = express.Router();
const { storeHistory, getHistoryByCoinId } = require('../controllers/historyController');

router.post('/', storeHistory);

router.get('/:coinId', getHistoryByCoinId);

module.exports = router;
