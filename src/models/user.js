module.exports = function (sequelize, DataTypes){
    var user = sequelize.define('User', {
        userId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'userid'
        },
        firstName: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'firstname'
        },
        lastName: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'lastname'
        },
        address: {
            type:DataTypes.STRING,
            allowNull: true,
            field: 'address'
        },
        phone: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'phone'
        },
        addressprooftype: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'addressprooftype'
        },
        addressproofid:{
            type:DataTypes.STRING,
            allowNull: false,
            field: 'addressproofid'
        }

    },{
        tableName: 'users',
        schema : 'librarydb',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
    });

    user.removeAttribute('id');

    return user;
};