import User from '../../models/Users'
import connectDb from "../../middlware/mogoose"

const handler = async(req,res)=>{
    if(req.method == "POST"){
        let u = new User(req.body)
            
            await u.save()
        
        return res.status(200).json({success:"success"})
    } else{
        res.status(400).json({error:"This method is not allowed"})
    }
}

export default connectDb(handler)