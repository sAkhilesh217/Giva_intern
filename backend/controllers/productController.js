// productController.js

const productModel = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new product
const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    // Add the new product and capture the returned product data
    const newProduct = await productModel.addProduct(name, description, price, quantity);
    res.status(201).json(newProduct); // Return the created product as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    await productModel.editProduct(id, name, description, price, quantity);
    res.send('Product updated');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Frontend - Function to handle product deletion
const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/products/${productId}`);
    if (response.status === 200) {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId)); // Remove from state
      alert(response.data.message); // Optional alert
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};


module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
