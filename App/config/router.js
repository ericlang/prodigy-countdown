var express = require('express');
var path = require('path');

var server_config = require('../config/server_config');
var CountDownManager = require('../count-manager');


var router = express.Router();


router.use(express.static(server_config.PUBLIC_STATIC_CONTENT_DIR));

router.get("/", function(request, response) {
   response.sendFile("index.html", {root: server_config.PUBLIC_STATIC_CONTENT_DIR});
});

router.get("/countdown", function(request, response){
    response.json({countdown: CountDownManager.getCount()});
});


module.exports = router;