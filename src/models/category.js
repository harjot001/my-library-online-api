module.exports = function (sequelize, DataTypes){
    var category = sequelize.define('category', {
        categoryId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'categoryid'
        },
        categoryName: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'categoryname'
        }

    },{
        tableName: 'categories',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    category.removeAttribute('id');
    // category.associate = models =>{
    //     category.hasMany(models.resourceCategory, {foreignKey: 'categoryid'})
    // }
    // resource.associate = models =>{
    //  resource.hasMany(models.resourceCategory, {foreignKey: 'resourceid'})
    // }


    return category;
};