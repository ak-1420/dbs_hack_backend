const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    orderType:{
        type:String,
    },
    quantity:{
      type:Number
    },
    ExecutedQuantity:{
        type:Number
    },
    price:{
        type:Number
    },
    orderStatus:{
        type:String
    }
},{timestamps : true})
module.exports = mongoose.model('Stock' , stockSchema)

