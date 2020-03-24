
const fs = require('fs');
const path = require('path');

module.exports = class Wish {
    constructor(wishTitle){
    this.title = wishTitle;
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
}