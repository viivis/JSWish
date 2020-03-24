const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const router = express.Router();
const wishesController = require('../controllers/wishes');
const wishes = [];



router.get('/add-wish', wishesController.getAddWishPage);

router.post('/add-wish', wishesController.postAddWishes);

module.exports = router;
