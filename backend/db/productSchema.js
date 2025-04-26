const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    product_name:{type:String, required:false},
    old_price:{type: Number, required:false},
    discounted_price:{type: Number, required:false},
    shop_name:{type: String, required:false},
    shop_address:{type: String, required:false},
    product_manufacturing:{type: String, required:false},
})

const product = new mongoose.model("product",ProductSchema)

module.exports = product