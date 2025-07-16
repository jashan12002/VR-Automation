const express = require('express');
const router = express.Router();
const { getTopCoins } = require('../controllers/coinController');

router.get('/', getTopCoins);

module.exports = router;
