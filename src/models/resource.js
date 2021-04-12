module.exports = function (sequelize, DataTypes){
    var resource = sequelize.define('resource', {
        resourceId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourceid',
            primaryKey : true
        },
        resourceName: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'resourcename'
        },
        authorName: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'authorname'
        },
        description: {
            type:DataTypes.STRING,
            allowNull: true,
            field: 'description'
        },
        publicationYear: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'publicationyear'
        }

    },{
        tableName: 'resources',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    resource.removeAttribute('id');

    return resource;
};