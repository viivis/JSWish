const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/wishlist');
const adminRoute = require('./routes/admin');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute);


app.listen(8000, ()=> {
    console.log("Server is running on Port 8000.");
})