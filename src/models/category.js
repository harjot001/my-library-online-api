module.exports = function (sequelize, DataTypes){
    var category = sequelize.define('Category', {
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

    return category;
};