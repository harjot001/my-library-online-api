module.exports = function (sequelize, DataTypes){
    var resourceCategory = sequelize.define('Resourcecategory', {
        resourceCategoryId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourcecategoryid'
        },
        resourceId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourceid'
        },
        categoryId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'categoryid'
        }
    },{
        tableName: 'resourcecategories',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    resourceCategory.removeAttribute('id');

    return resourceCategory;
};