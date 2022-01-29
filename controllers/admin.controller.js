const Stock = require('../models/stock.model')
const Admin = require('../models/admin.model')

exports.createStock  = async (req , res ) => {
    const stock = new Stock(req.body)

    try 
    {
         const savedStock = await stock.save()
         res.status(201).json({
            status:true,
            message:'stock created successfully',
            data:savedStock
         })

    }
     catch (error) {
        res.status(500).json({
            status:false,
            message:'processing the request failed',
            data:error
        })
    }
}

exports.getStocks = async (req , res ) => {

    try 
    {
       const stocks = await Stock.find()
       res.status(200).json({
           status:true,
           message:'stocks fetched successfully',
           data:stocks
       })
    } 
    catch (error) {
        res.status(500).json({
            status:false,
            message:'processing the request failed',
            data:error
        })
    }
}

exports.createAdmin = async (req , res ) => {
    const admin = new Admin(req.body)
    try 
    {
         const savedAdmin = await admin.save()
         res.status(201).json({
            status:true,
            message:'admin created successfully',
            data:savedAdmin
         })

    }
     catch (error) {
        res.status(500).json({
            status:false,
            message:'processing the request failed',
            data:error
        })
    }
}