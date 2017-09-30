// Import the mongoose module
var mongoose = require('mongoose');

// Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/admin';
mongoose.connect(mongoDB,{
    useMongoClient: true
)};

//Get the default Connection
var db = mongoose.connection;


// Bind connection to error event (to get notification of connection error:)
db.on('error',console.error.bind(console, 'MongoDB connection error:'));
