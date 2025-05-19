const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ayu-furniture");

// Example: Storing a new product
const Product = require("./models/Product");

const newProduct = new Product({
  title: "Wooden Dining Table",
  description: "Elegant 6-seater with premium polish",
  price: 12000,
  image: "/images/table.jpg",
  category: "Dining",
  rating: 4.7,
  inStock: true,
});

newProduct.save()
  .then(() => console.log("Product saved!"))
  .catch(err => console.log("Error:", err));
