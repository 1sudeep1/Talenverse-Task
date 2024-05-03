//importing the conactUser Controller
const {contactUser} = require('../controllers/contact')

//importing express
const express = require('express')
router=express.Router()

//route for creating contact
router.post('/contact', contactUser)

//exporting the route
module.exports= router