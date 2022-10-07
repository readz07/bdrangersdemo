const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    uesrId:{type:String, required:true},
    products:[{
        productId:{type:String},
        quantity:{type:Number, default:1}
    }],
    address:{type: String, required: true},
    amount:{type:Number, required:true},
    status:{type:string, default:"Pending", required:true}
},{timestamps:true})

module.exports = mongoose.model.Orders || mongoose.model("Orders",OrdersSchema)