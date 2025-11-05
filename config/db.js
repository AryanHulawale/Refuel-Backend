const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://aryanhulawale2020_db_user:fgMcWBktBZyKbWqC@refuel.c11e8g3.mongodb.net/?appName=REFUEL');
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

