import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin, seller } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, seller, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, seller, updateProduct);

export default router;