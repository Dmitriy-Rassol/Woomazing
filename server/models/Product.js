const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  description: String,
  image: String
}, { timestamps: true });

module.exports = model('Product', productSchema);

