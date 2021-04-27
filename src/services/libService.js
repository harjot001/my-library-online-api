const { Sequelize } = require('sequelize');
const { resource } = require('../../server');
const { sequelize } = require('../models');
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
        let query  = `select 
                     r.resourceid as "resourceId",
                     r.resourcename as "resourceName",
                     r.authorname as "authorName",
                     r.description as "description",
                     r.publicationyear as "publicationYear",
                     c.categoryid as "categoryId",
                     c.categoryname as "categoryName"

                     from librarydb.resources r join librarydb.resourcecategories rc on r.resourceid = rc.resourceid 
                        join librarydb.categories c on c.categoryid = rc.categoryid`;
        
        let resourceList = await sequelize.query(query, {replacements: {}, type: sequelize.QueryTypes.SELECT})

        return resourceList
         } catch(error) {
            console.error(error)
            return null;
        } 
    }

/**
 * This function looks up and returns the list of resources that match the given search keyword and criterion
 * @param {*} criterion 
 * @param {*} searchKeyword 
 * @param {*} sortBy 
 * @returns 
 */
 var findResources = async (criterion, searchKeyword, sortBy) =>{
    try {
        let query  = `select 
        r.resourceid as "resourceId",
        r.resourcename as "resourceName",
        r.authorname as "authorName",
        r.description as "description",
        r.publicationyear as "publicationYear",
        c.categoryid as "categoryId",
        c.categoryname as "categoryName"

        from librarydb.resources r join librarydb.resourcecategories rc on r.resourceid = rc.resourceid 
           join librarydb.categories c on c.categoryid = rc.categoryid`;

          let where; 
          if(criterion == 'authorName')
            where = ` where authorName like '%${searchKeyword}%'`
          else if(criterion == 'description')
            where = ` where description like '%${searchKeyword}%'`
           
            query = query + where;

          let orderBy =  " order by authorName" 
          if(sortBy && sortBy == 'publicationYear') 
            orderBy = " order by publicationYear"
            
            query = query + orderBy;
            
            
        var replacementObj = {};
        // replacementObj.keyword = searchKeyword;
        
        let resourceList = await sequelize.query(query, {replacements: replacementObj, type: sequelize.QueryTypes.SELECT})

        return resourceList;
        } catch(error) {
            console.error(error)
            return null;
        } 
}

module.exports = {
    getResourceById: getResourceById,
    getAllResources:getAllResources,
    findResources: findResources
}
