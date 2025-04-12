import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/UserModel.js'; // Adjust the path as necessary

dotenv.config();

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging line

const seedAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Delete existing admin user if it exists
    await User.deleteOne({ email: 'mesewokewose@gmail.com' });

    // Create admin user without triggering the pre('save') middleware
    const adminUser = new User({
      username: 'admin',
      email: 'mesewokewose@gmail.com',
      password: bcrypt.hashSync('admin123', 10), // Hash the password manually
      role: 'admin',
      isActive: true,
    });

    // Use save() with { validateBeforeSave: false } to bypass pre('save') middleware
    await adminUser.save({ validateBeforeSave: false });

    console.log('Admin user created!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdminUser();