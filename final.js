var moongoose= require("mongoose");
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
mongoose.connect("Your connection string here");
var new_Schema = new Schema({
  "Email":{
    "type": string,
    "unique": true} ,
  "password": String
});

let finalUsers;
module.exports.startDB = function () {
    return new Promise(function (resolve, reject) {
        const db= mongoose.createconnection("mongodb+srv://senecaweb.rsbwdc7.mongodb.net/myFirstDatabase", {useNewUrlParser: true});
        db.on('error', function(err){
            console.log("Cannot connect to DB");    
        });
        db.once('open', function(){
            User = mongoose.model("finalUsers", new_Schema);
            console.log("DB connection successful.");
            resolve();
         });
     });
 };

 signIn: function(user) {
    return new Promise(function (resolve, reject) {
        finalUsers.findOne({ email: user.email })
        .then((UserFound) => {
            if (!UserFound) {
                reject("Cannot find the user: " + user.email);
            } else  {bcrypt.compare(user.password, UserFound.password).then((res) => {
                if (res === true) 
                {
                    resolve(UserFound);
                } else 
                {
                    reject("Password incorrect " + user.email);
                }
            });
        }
    }).catch(() => {
        reject("Cannot find the user: " + user.email);
    });
})
}
