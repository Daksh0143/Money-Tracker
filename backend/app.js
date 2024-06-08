const express=require("express")
const cors=require("cors")
require("dotenv").config()
const dbConnect=require("./DB/db")
const app=express()
const moneyRoutes =require("./Routes/moneyRoutes")

const port=process.env.PORT

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/money",moneyRoutes)


dbConnect()


app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})