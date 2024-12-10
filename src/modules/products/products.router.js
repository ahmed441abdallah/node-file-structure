import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from './products.controllers.js';
const router = express.Router();
router.get('/products', getAllProducts);
router.post("/products", addProduct);
router.get('/products/:id', getProductById);
router.delete("/products", deleteProduct);
router.put('/products', updateProduct);
export default router;