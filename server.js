const express = require("express")
const app =express()
const dotenv =require("dotenv")
const  mongoose  = require("mongoose")


dotenv.config()
app.use(express.json())
app.use("/api", require("./routes/userRoutes"))

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("data base connect"))
.catch((err)=> console.error(err))


const port=process.env.PORT
app.listen(port,  ()=> console.log("my server is run in port :",port))


