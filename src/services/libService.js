const { Sequelize } = require('sequelize');
const { resource } = require('../../server');
var Models = require('../models');
const Op = Sequelize.Op;

/**
 * This function looks up and returns the resource corrosponding to the given resource id
 * @param {*} resourceId 
 * @returns 
 */
var getResourceById = async (resourceId) =>{
    try {
    let resource = await Models.resource.findOne({
        where: {resourceId: resourceId}
    })
        return resource
     } catch(error) {
        console.error(error)
        return null;
    } 
}

/**
 * This function returns list of all the resources available
 * @param {*} resourceId 
 * @returns 
 */
var getAllResources = async () =>{
    try {
        let resourceList = await Models.resource.findAll({
            include: [
                {
                    model: Models.resourceCategory,
                    attributes : ['categoryId'],
                    // include : [
                    //     {
                    //         model: Models.category,
                    //         attributes: ['categoryName']
                    //     }
                    // ]
                }
            ]
            // attributes : ['resourceid']
        })
            return resourceList
         } catch(error) {
            console.error(error)
            return null;
        } 
    }

/**
 * This function looks up and returns the list of resources that match the given search keyword and criterion
 * @param {*} resourceId 
 * @returns 
 */
 var findResources = async () =>{
    
}

module.exports = {
    getResourceById: getResourceById,
    getAllResources:getAllResources,
    findResources: findResources
}
