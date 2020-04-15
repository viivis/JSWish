const mongoose = require('mongoose');
//const Wish = require('../models/wish');
const Wish = mongoose.model('Wish');

exports.getWishes = (req, res) => {
    Wish.find((error, wishes) => {
        if(!error) {
            res.render('wishList', {
                pageTitle: 'Welcome to my wishlist!',
                wishes: wishes,
                path: '/'
            });
        }
    });
}

exports.getAddWishPage = 
(req, res) => {
    res.render('add-wish', {
        pageTitle: "Add New wish",
        path: "/admin/add-wish"
    });
}

exports.postAddWishes = (req, res) => {
    let wish = new Wish();
    wish.wish = req.body.wish;
    wish.save((error, response) => {
        if(!error) {
            res.redirect('/');
        } else {
            console.log(error);
        }
    })
}

exports.deleteWish = (req, res) => {
    const id = req.params.id;
    Wish.findByIdAndRemove(id, function(error) {
        if(!error) {
            console.log('Kustutatud');
            res.redirect(('/'));
        }
    })
}
/*
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
*/
