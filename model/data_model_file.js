/***************************************** Creating model(table) for performing crud operation on sensor data ***************************/









var mongoose = require('mongoose');

// Creating Data Schema (table)

var dataSchema = new mongoose.Schema({
    _id: String,
    name: String,
    message: String,
    created_at: {type: Date, default:Date.now},
    X: Number,
    Y: Number

});


//Generating module from the schema.... Export function to create Data model class
module.exports = mongoose.model('data_model',dataSchema);



/************************ here data_model is  the name of collection(table), now we can use it to create an instance of the table in other file and which in turn will help us in CRUD operation in the data_modules  collection*******************/
