var Models = require('./../models');
var service = require('../services/libService')
var searchResource = (req, res) =>{

}

var getResourceDetails = async (req, res) =>{
    const id = req.params.resourceId   
    try {
    const resource = await Models.resource.findAll({
        where: {resourceId: id}
    })
    res.json({ resource })
     } catch(error) {
    console.error(error)
    }   
}

var getAllResources = (req, res) =>{
    
}

module.exports = {
    getResourceDetails: getResourceDetails
}

