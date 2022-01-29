const Stock = require('../models/stock.model')
const Admin = require('../models/admin.model')
const adminId = "61f4e45e8ce9b4828d41e4c3"

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


exports.updateMarket = async (req , res) => {
    
    const updateMarket = req.body

    try 
    {
        const admin = await Admin.findById(adminId)

        const updatedAdmin = await admin.findByIdAndUpdate(admin._id , {
         updatedMarket
        },{new:true})

        res.status({
            status:true,
            message:'market status updated successfully',
            data:updatedAdmin
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

// exports.executeOrders = async (req , res) => {

//        const stockName = req.body.stockName
//        const executedQuantity = req.body.executedQuantity
//        const executedPrice = req.body.executedPrice

//        try 
//        {

//            const admin = await Admin.findById(adminId)

//            if(!admin.isMarketOpen){ // check if market is open or closed
//                return res.status(400).json({
//                 status:false,
//                 message:'processing the request failed',
//                 data:'market is closed'
//                })
//            }

//            // get the latest stocks 
//            const stocks = await Stock.find({name : stockName}).sort({createdAt : -1})
           
//            stocks.map( async (stock) => {
              
//            })


//        } 
//        catch (error) {
//         res.status(500).json({
//             status:false,
//             message:'processing the request failed',
//             data:error
//         })
//        }
// }