const Product = require('../models/product.js');

async function create (ctx){
    const newProduct = new Product(ctx.request.body);
    const savedProduct = await newProduct.save();
    ctx.body = savedProduct;
};

module.exports = {create};