var express =require('express');
var router = express.Router();

//Require controller modules
var datacontrollers = require('../controllers/datacontroller');
var  usercontrollers = require('../controllers/usercontroller');


/// Sensor routeds///
//
// Get home page

router.get('/', usercontrollers.index);
//users routes

/* GET request for creating a user Note this must come before routes that disply users */

router.get('/user/login', usercontrollers.user_login);


//Data routes
/* GET request for creating data Must come before displaying data */
router.get('/welcome/datainsert', datacontrollers.data_get);
// displaying sensor data
router.get('/welcome/datalist',datacontrollers.user_data_list);

module.exports = router;
