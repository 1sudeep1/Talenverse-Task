const express = require('express')
const app = express()
const connect = require('./db/connection')
app.use(express.json())
connect()
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routes/userRoutes')
app.use(userRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})