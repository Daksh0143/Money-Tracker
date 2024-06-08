const mongoose=require("mongoose")

const moneySchema=new mongoose.Schema({
    category:{
        type:String,
        enum:['Income','Expense']
    },
    amount:{
        type:Number,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
},{timestamps:true})


const Money=mongoose.model("Money",moneySchema);


module.exports=Money