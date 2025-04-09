import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//  @desc    Get all users
//  @route   GET /api/admin/users
//  @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//  @desc    Delete user
//  @route   DELETE /api/admin/users/:id
//  @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//  @desc    Get user by ID
//  @route   GET /api/admin/users/:id
//  @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//  @desc    Update user
//  @route   PUT /api/admin/users/:id
//  @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
      user.isActive = req.body.isActive !== undefined ? req.body.isActive : user.isActive;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
        isActive: updatedUser.isActive,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  }
});

export {
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};