const Money = require("../models/money.model")


const postMoney = async (req, res) => {
    try {
        const { category, amount, info } = req.body
        console.log(req.body)

        if (!category || !amount || !info ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the details"
            })
        }


        const data=await Money.create({ category, amount, info })
        res.status(201).json({
            success: true,
            message: "Money Posted Successfully",
            data
        })

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Internal Server Error",
            error
        })
    }
}


const getMoney=async(req,res)=>{
    try {
        const data=await Money.find()
        res.status(201).json({
            success:true,
            data
        })
        
    } catch (error) {
        res.status(501).json({
            success:false,
            message:"Internal Server Error"
        })
    }

}

module.exports = { postMoney,getMoney }  