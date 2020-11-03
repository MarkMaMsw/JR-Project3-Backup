const { OutlinedInput } = require('@material-ui/core');
const { isValidObjectId } = require('../database/db.js');
const {mongoose, Schema}= require('../database/db.js');

const Schema_P = mongoose.Schema;

var productSchema = new Schema_P({
    _id: {type: ObjectId},
    productId: {type: String},
    name: {type: String},
    primaryColor: {type: String},
    category: {type: String},
    subCategory: {type: String},
    image: {type: String},
    stars: {type: Number},
    price: {type: Number},
    description: {type: String}
});

module.exports = mongoose.model('Product',productSchema);