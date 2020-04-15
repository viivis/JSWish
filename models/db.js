const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });
require('./wish');