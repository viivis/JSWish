
const Wish = require('../models/wish');

exports.getAddWishPage = 
(req, res) => {
    res.render('add-wish', {
        pageTitle: "Add New wish",
        path: "/admin/add-wish"
    });
}
exports.postAddWishes = 
(req, res) => {
        console.log(req.body.wish);
        const wish = new Wish(req.body.wish);
        wish.saveWish();
        res.redirect('/');
    };

exports.getWishes = 
(req, res) => {
        Wish.fetchAllWishes((wishes)=>{
           res.render('wishList', {
            pageTitle: 'Welcome to My WishList!',
            wishes: wishes,
            path: '/'
        });   
    })       

};

