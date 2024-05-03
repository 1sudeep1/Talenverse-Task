//importing the express
const express = require('express')

//importing cors
const cors= require('cors')
const app = express()

//using the external .env in the project
require('dotenv').config()
const port = process.env.PORT

//importing the route that is defined in routes/contactRoutes
const contactRouter = require('./routes/contactRoutes')

//importing the db connection
const connect = require('./db/connection')

// to parse req.body to plain object/json
app.use(express.json())

//CORS defines a way in which a browser and server can interact and determine whether or not it is safe to allow a cross-origin request.
app.use(cors())

//calling the connection
connect()

//using the route
app.use(contactRouter)

//listening the port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})