const express = require('express')
const router = express.Router();
var controller = require('../controllers/libController')

module.exports = function(app, express){
    // router.get('/user/:userId', controller.getUser);
    // router.get('/resources/searchResource/{criterion}/{searchKeyword}/{sortBy}', controller.searchResource);
    router.get('/resources/getResourceDetails/:resourceId', controller.getResourceDetails);
    // router.get('/resources/browseResources', controller.getAllResources);

    app.use('/', router)
    
}

