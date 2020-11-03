//react-script4.0.0, node version 14.9.0
const mongoose = require("mongoose");
const uri = "mongodb+srv://Admin:JRPROJECT123@jrproject3.1jeqp.mongodb.net/jrproject?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

const prodcutSchema = {
    prodcutId: String,
    name: String,
    primaryColor: String,
    category: String,
    subCategory: String,
    image: String,
    stars: Number,
    price: Number,
    description: String,
}
const Product = mongoose.model('Products', prodcutSchema);

(async () =>{
    const findResult = await Product.findOne({
        _id : new mongoose.Types.ObjectId("5f9efeda3a45c90d27a808b2"),
    });
    console.log(findResult);
})();