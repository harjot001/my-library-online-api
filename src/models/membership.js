module.exports = function (sequelize, DataTypes){
    var membership = sequelize.define('membership', {
        membershipId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'membershipid'
        },
        userId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'userid'
        },
        startDate: {
            type:DataTypes.DATE,
            allowNull: false,
            field: 'startdate'
        },
        activeFlag: {
            type:DataTypes.CHAR,
            allowNull: false,
            field: 'activeflag'
        }

    },{
        tableName: 'memberships',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    membership.removeAttribute('id');

    return membership;
};