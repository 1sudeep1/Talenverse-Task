const express = require('express')
router=express.Router()
const {test} = require('../controllers/users')
router.get('/', test)

module.exports= router