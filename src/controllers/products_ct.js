const Product = require('../models/product.js');

async function create (ctx){
    const newProduct = new Product(ctx.request.body);
    const savedProduct = await newProduct.save();
    ctx.body = savedProduct;
};

async function findAndDelete(ctx){
    const id = ctx.params.productId;
    const product_toDelete = await Product.findById(id);
    product_toDelete.deleted = true;

    const product_deleted = await product_toDelete.save();
    ctx.body = product_deleted;
};
module.exports = {create, findAndDelete};