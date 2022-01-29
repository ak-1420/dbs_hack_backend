const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const moongoose = require('moongoose')
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT || 5000

app.get('/' , (req , res) => {
   res.send('<center><h1>DBS Hack Backend - Order Booking System </h1></center>')
})


moongoose.connect(process.env.MONGO_URL).then(() => {
   app.listen(port , () => {
      console.log(`order booking system running on port ${port}`)
   })
}).catch((error) => {
   console.log(`${error} \n did not able to connect to database`)
})



