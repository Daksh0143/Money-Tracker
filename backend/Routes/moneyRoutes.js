const express=require("express")
const router=express.Router()
const {postMoney,getMoney} =require("../Controller/moneyController")


router.post("/post-money",postMoney)
router.get("/get-money",getMoney)

module.exports=router