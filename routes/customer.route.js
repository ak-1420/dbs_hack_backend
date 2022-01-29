const express =  require('express')
const router = express.Router()
const customerController = require('../controllers/customer.controller')

// all routes for the customer are handled here

router.get('/' , (req , res) => {
  res.send('<center> <h1>Customer Routes</h1> </center>')
})

module.exports = router