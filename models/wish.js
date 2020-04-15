
//const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    wish: {
        type: String
    }
})

mongoose.model('Wish', wishSchema);
/*
module.exports = class Wish {
    constructor(wish){
    this.wish = wish;
    }

    saveWish() {
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'
    ); 
        fs.readFile(dataPath, (error, fileContent) =>{
            let wishes = [];
            if(!error){
               wishes = JSON.parse(fileContent);
            }
            wishes.push(this);

            fs.writeFile(dataPath, JSON.stringify(wishes),(error) => {
                console.log(error);
            })
        });
        
 }
    static fetchAllWishes(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'
    );
    fs.readFile(dataPath, (error, fileContent) => {
        if(error){
            return callBack([]);
        }
        callBack(JSON.parse(fileContent));
    });
    }
} */