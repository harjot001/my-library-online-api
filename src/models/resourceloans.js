module.exports = function (sequelize, DataTypes){
    var resourceLoan = sequelize.define('resourceLoan', {
        resourceLoanId : {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourceloanid'
        },
        resourceId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'resourceid'
        },
        membershipId: {
            type:DataTypes.INTEGER,
            allowNull: false,
            field: 'membershipid'
        },
        dueDate: {
            type:DataTypes.DATE,
            allowNull: false,
            field: 'duedate'
        },
        phone: {
            type:DataTypes.INTEGER,
            allowNull: true,
            field: 'reissuecount'
        }

    },{
        tableName: 'resourceloans',
        schema : 'librarydb',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });

    resourceLoan.removeAttribute('id');

    return resourceLoan;
};