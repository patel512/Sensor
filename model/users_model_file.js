/*******************************   TABLE(Collection) Creation for users crud operation like  inserting user, deleting user and ***************************/






//here firs we are creating schema (i.e defining model)for userSchema  and after that we are creating model for the schema

var mongoose = require('mongoose');

/*user schema i.e collection(or table for user) */
var userSchema =new mongoose.Schema({
    name: String,

password: {
        type:Number,
        min:[6, 'Less Secured'],

        max:[12, 'hold on otherwise im going to burn']//hash created from password
    created_at: {type: Date, default: Date.now}
    firstname: String,
    lastname: String
});

// Creating a model
//Using Schema to register user ... Export function to create "UserSchema" model class
//Here below users(first arg) is the name of collection created for our model
/*and the second argument (userSchema ) is the schema we want to use in creating the model. i.e users is the name of table which we will use for storing the users name, password and the date created*/



module.exports = mongoose.model('users_model', userSchema);



/*********************************** Now finally the table(users_model) is created and we are ready for creating an instanceof the table for insering , updating and deleting documents(records) inside the table(users_model)  ****************************/


/*** the instance will be created inside the controller directory under the  file name user_controller   where we will first import this file and after then will create an instace of it ********************/




/*Once model is created we can use it to find , create,update and delete objects of given types*/
