const { resource } = require('../../server');
var Models = require('../models');

/**
 * This function looks up and returns the resource bu teh given resource id
 * @param {*} resourceId 
 * @returns 
 */
var getResourceById = async (resourceId) =>{
    try {
    let resource = await Models.resource.findAll({
        where: {resourceId: resourceId}
    })
        return resource
     } catch(error) {
        console.error(error)
        return null;
    } 
}

module.exports = {
    getResourceById: getResourceById
}
