const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./admin');
const router = express.Router();
const wishesController = require('../controllers/wishes');

router.get('/', wishesController.getWishes);

module.exports = router;