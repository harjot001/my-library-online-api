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
        res.json({message: 'System error while retrieving the resource list, please try again'});
}

/**
 * This is controller function to return the list of all resources in the database
 * @param {*} req 
 * @param {*} res 
 */
var browseResources = async (req, res) =>{
    let resourceList = await service.getAllResources();   
    if(resourceList)
        res.json({ resourceList })
    else
        res.json({message: 'System error while retrieving the resource list, please try again'});
}

/**
 * This controller function searches for resources by given criterion and keyword
 * @param {*} req 
 * @param {*} res 
 */
var searchResources = (req, res) =>{

}

module.exports = {
    getResourceDetails: getResourceDetails,
    browseResources: browseResources,
    searchResources: searchResources
}

