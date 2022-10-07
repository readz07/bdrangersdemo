import Products from "../../models/Products"
import connectDb from "../../middlware/mogoose"

const handler = async(req,res)=>{
    if(req.method == "POST"){
        console.log(req.body)
        for(let i=0; i<req.body.length;i++){
            let p= await Products.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        return res.status(200).json({success:"update success"})
    } else{
        res.status(400).json({error:"This method is not allowed"})
    }
}

export default connectDb(handler)