module.exports = function (sequelize, DataTypes){
    var resourceCategory = sequelize.define('resourceCategory', {
        resourceCategoryId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourcecategoryid',
            primaryKey : true
        },
        resourceId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourceid',
            references : {
                model: 'resource',
                key : 'resourceid'
            }
        },
        categoryId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'categoryid',
            references : {
                model: 'category',
                key : 'categoryid'
            }
        }
    },{
        tableName: 'resourcecategories',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    resourceCategory.removeAttribute('id');
    // resourceCategory.associate = models =>{
    //     resourceCategory.belongsTo(models.category, {foreignKey: 'categoryid'})
    // }

    return resourceCategory;
};