const { resource } = require('../../server');
var Models = require('./../models');
var service = require('./../services/libService')
var searchResource = (req, res) =>{

}

/**
 * This is controller for getting resourec details for any given resource
 * @param {*} req 
 * @param {*} res 
 */
var getResourceDetails = async (req, res) =>{
    const id = req.params.resourceId;
    let resource = await service.getResourceById(id);   
    if(resource)
        res.json({ resource })
    else
        res.json({message: 'The resource cannot be found'});
}

/**
 * This is controller function to return the list of all resources in the database
 * @param {*} req 
 * @param {*} res 
 */
var getAllResources = (req, res) =>{

}

/**
 * This control is used to lookup and return the list fo resources based on the given filter criteria
 * @param {*} req 
 * @param {*} res 
 */
var searchResources = (req, res) =>{

}

module.exports = {
    getResourceDetails: getResourceDetails
}

