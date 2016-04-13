var express = require('express');

var router = express.Router();

var CountDownManager = require('../count-manager');


router.get("/countdown", function(request, response){
    response.json({countdown: CountDownManager.getCount()});
});


module.exports = router;