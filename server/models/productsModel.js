const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  width: {type: Number},
  height: {type: Number},
  depth: {type: Number},
  weight: {type: Number},
  // details: {
  //   dimensions: { width: Number, height: Number, depth: Number },
  //   weight: Number,
  // },
  ratings: {
    average: Number,
    numberOfRatings: Number,
  },
});

module.exports = mongoose.model("Products", productSchema);
