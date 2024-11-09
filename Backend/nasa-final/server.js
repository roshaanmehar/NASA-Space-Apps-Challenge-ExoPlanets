require("dotenv").config();

const express = require("express");
const connectDB = require('./config/db'); // Centralized DB connection
const apiRoutes = require('./routes/exoRoutes'); // Import the routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB(); // Now using centralized function for DB connection

// Register routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
