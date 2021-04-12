
const express = require('express')
const app = express()
const http = require('http')

/* Link the routes to the app   */
require('./src/routes')(app, express);

app.use(express.json())

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

/* Create http server listening om port 5008  */
const httpServer = http.createServer(app);
httpServer.listen(5008, () =>{
    console.log('HTTP server running on port 5008' );
});

module.exports = app;
