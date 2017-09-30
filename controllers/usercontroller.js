/* here first we are requiring the model (/model/user) so that we can create an instance of it to query the database */



var user = require('../model/user_model_file'); /* Importing user model from directory model/user  to create instance of model user       and use that instance for querying or implementing the crud operation */


//export function for each of the URL we wish to handle()
//here we are planning to have /login and /index path and thats why we created exports.index and exports.login. So in this ffile we will decide what todo with the index and login page like if we want to get data from /login then we will implement "put" api of http. and then the call back function
//
//index function for displaying the site welcome page
exports.index = function(req,res){
    res.send('Not Implemented home page in usercontroller.js');
};

//user login  details
//here we are exporting function for the URL we wish to handle(the crud use forms and hence also have additional methods for handling form post request)
exports.login = function(req, res) {
    res.send('Not implemented user login details ' + req.params.id);
};



