const express =  require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller')


// all routes for the admin are handled here

router.get('/' , (req , res) => {
    res.send('<center> <h1> Admin Routes </h1> </center>')
})

// route to create a stock
router.post('/stock' , adminController.createStock)
router.get('/stock', adminController.getStocks)
router.post('/', adminController.createAdmin)
router.patch('/' , adminController.updateMarket)

module.exports = router