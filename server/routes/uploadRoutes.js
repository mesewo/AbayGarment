import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin
router.post(
  '/user',
  upload.single('image'), // 'image' is the field name in the form
  asyncHandler((req, res) => {
    res.status(200).json({ imageUrl: req.file.path }); // Cloudinary URL
  })
);

router.post(
  '/product',
  upload.single('image'), // 'image' is the field name in the form
  asyncHandler((req, res) => {
    res.status(200).json({ imageUrl: req.file.path }); // Cloudinary URL
  })
);

router.post(
  '/',
  upload.single('image'), // 'image' is the field name in the form
  asyncHandler((req, res) => {
    res.status(200).json({ imageUrl: req.file.path }); // Cloudinary URL
  })
);

export default router;