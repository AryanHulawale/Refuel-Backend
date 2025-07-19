const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./app/routes/userRouter');
const { errorHandler } = require('./app/utils/errorHandler');
const cors = require('cors');
require('dotenv').config();

// Initialize app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));