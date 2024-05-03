const {contactUser} = require('../controllers/contact')
const express = require('express')
router=express.Router()
router.post('/contact', contactUser)

module.exports= router