const express = require('express')
const cors= require('cors')
const app = express()
const connect = require('./db/connection')
app.use(express.json())
connect()
require('dotenv').config()
const port = process.env.PORT
const contactRouter = require('./routes/contactRoutes')
app.use(contactRouter)
app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})