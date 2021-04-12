const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename);
const db = {};

const Sequelize = require('sequelize')

/* Create sequelize project and connect to the database  */
let sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/libdb', {schema: 'librarydb'})
sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

var currentPath = path.join(process.cwd(), '/src/models')

/* Read all the models in the folder and add to db object  */
fs.readdirSync(currentPath).filter(file => {
    return (file.indexOf('.') != 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    console.log('file',file)
    // const model = sequelize['import'](path.join(currentPath, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
})


Object.keys(db).forEach(modelName =>{
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;