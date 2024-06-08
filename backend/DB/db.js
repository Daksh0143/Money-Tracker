const mongoose=require("mongoose")


const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017",{
        dbName:"Money_Tracker"
    }).then((result) => {
        console.log("DB Connected Successfully")
    }).catch((err) => {
        console.log("Sommthing went wrong")
    });
}


module.exports=dbConnect