const { isValidObjectId } = require('../database/db.js');
const {mongoose, Schema, ObjectId, model}= require('../database/db.js');

const productSchema = new Schema({
    _id: {type: ObjectId},
    productId: {type: String},
    name: {type: String},
    primaryColor: {type: String},
    category: {type: String},
    subCategory: {type: String},
    image: {type: String},
    stars: {type: Number},
    price: {type: Number},
    description: {type: String},
    deleted: {type: Boolean}
});

const Product = model('Product', productSchema);

module.exports = model('Product');