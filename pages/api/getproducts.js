import Products from "../../models/Products"
import connectDb from "../../middlware/mogoose"

const handler = async(req,res)=>{
    let products = await Products.find()
    res.status(200).json({products})
}

export default connectDb(handler)