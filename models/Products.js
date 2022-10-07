const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, default: 1 }
}, { timestamps: true })
mongoose.models = {}
module.exports = mongoose.model.Products || mongoose.model("Products", ProductsSchema)