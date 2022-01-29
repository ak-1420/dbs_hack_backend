const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
   executedQuantity:{
       type:Number
   },
   executedPrice:{
       type:Number
   },
   isMarketOpen:{
       type:Boolean
   }
},{timestamps : true})

module.exports = mongoose.model('Admin' , adminSchema)
