const express = require('express')

const app = express()

const port = 5008

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/libdb', {schema: 'librarydb'})

sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});

const Resource = sequelize.define('resource', {

    // attributes
    
    resourceId: {  
    type: Sequelize.INTEGER, 
    primaryKey: true,
    allowNull: false,
    field : 'resourceid'
    },
    
    resourceName: {   
    type: Sequelize.STRING,
    allowNull: false,
    field : 'resourcename'
    },

    authorName: {   
    type: Sequelize.STRING,
    allowNull: false,
    field : 'authorname'
    },

    description: {   
    type: Sequelize.STRING,
    allowNull: true,
    field : 'description'
    },

    publicationYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field : 'publicationyear'
    }
    
    }, {
        schema : 'librarydb',
        timestamps: false,
        createdAt : false
    // options
    });
    // Resource.schema("librarydb");

    app.post('/user', async (req, res) => {

        try {
        
        const newResource = new Resource(req.body)
        await newResource.save()
        res.json({ resource: newResource }) // Returns the new user that is created in the database
        } catch(error) {
        console.error(error)
        }
        })

    app.get('/resource/:resourceId', async (req, res) => {

            const id = req.params.resourceId   
            try {
            const resource = await Resource.findAll({
             where: {resourceId: id}
            })
            res.json({ resource })
             } catch(error) {
            console.error(error)
            }   
            })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))