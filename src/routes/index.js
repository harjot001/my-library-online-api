const express = require('express')
const router = express.Router();
var controller = require('../controllers/libController')

/* Map the controller to the path */
module.exports = function(app, express){

    router.get('/resources/getResourceDetails/:resourceId', controller.getResourceDetails);
    // router.get('/resources/browseResources', controller.getAllResources);
    // router.get('/resources/searchResource/{criterion}/{searchKeyword}/{sortBy}', controller.searchResource);

    app.use('/', router)
    
}

